"use server";
import { auth } from "@clerk/nextjs/server";
import { fetchBallot } from "@/lib/fetchBallot";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnswersTable } from "@/components/peek-ballot/answers-table";
import { GuessesTable } from "@/components/peek-ballot/guesses-table";
import { MixedTable } from "@/components/peek-ballot/mixed-table";
import { Metadata } from "next";
import { Ballot } from "@/lib/types/ballot";

type BallotProps = {
   params: { ballot_id: string };
};

let ballotCache: Ballot | null = null;

async function getBallot(ballot_id: string, user_id: string | null) {
   if (!ballotCache) {
      ballotCache = await fetchBallot(ballot_id, user_id);
   }

   return ballotCache;
}

export async function generateMetadata({
   params,
}: BallotProps): Promise<Metadata> {
   const { userId }: { userId: string | null } = auth();
   const ballot = await getBallot(params.ballot_id, userId);

   if (!ballot) {
      return {
         title: "Ballot not found",
      };
   } else {
      return {
         title: ballot.title,
      };
   }
}

export default async function BallotPage({
   params,
}: {
   params: { ballot_id: string };
}) {
   auth().protect();

   const { userId }: { userId: string | null } = auth();
   const ballot = await getBallot(params.ballot_id, userId);

   return (
      <div>
         {ballot ?
            <div>
               <h1 className="text-center text-2xl font-bold">{ballot.title}</h1>
               <Tabs defaultValue="mixed" className="mt-4 w-full">
                  <TabsList className="grid w-full grid-cols-3">
                     <TabsTrigger value="guesses">You</TabsTrigger>
                     <TabsTrigger value="mixed">Both</TabsTrigger>
                     <TabsTrigger value="answers">Taylor</TabsTrigger>
                  </TabsList>
                  <GuessesTable {...ballot} />
                  <MixedTable {...ballot} />
                  <AnswersTable {...ballot} />
               </Tabs>
            </div>
         :  <div></div>}
      </div>
   );
}
