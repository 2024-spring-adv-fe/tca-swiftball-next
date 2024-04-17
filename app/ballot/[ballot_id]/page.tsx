"use server";
import PeekBallot from "@/components/peekBallot";
import { auth } from "@clerk/nextjs/server";

export default async function BallotPage({
   params,
}: {
   params: { ballot_id: string };
}) {
   auth().protect();

   const { userId }: { userId: string | null } = auth();

   return (
      <div>
         {userId && <PeekBallot ballot_id={params.ballot_id} user_id={userId} />}
      </div>
   );
}
