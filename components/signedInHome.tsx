"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";
import type { Ballot } from "@/lib/types/ballot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tally5, TicketCheck, Target } from "lucide-react";
import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import { calculateProfileStats } from "@/lib/calculateProfileStats";

type userStats = {
   total_ballots: number;
   total_points: number;
   avg_points: number;
   total_accuracy: number;
};

export default async function SignedInHome() {
   auth().protect();

   const { userId }: { userId: string | null } = auth();

   if (userId) {
      calculateProfileStats(userId);
   }

   const db = getRequestContext().env.DB;
   const { results: ballots } = await db
      .prepare(
         `SELECT ballot_id, points, title, accuracy FROM ballots WHERE user_id = '${userId}' ORDER BY finished_at DESC;`,
      )
      .all<Ballot>();

   const userStats = await db
      .prepare(`SELECT * FROM user_stats WHERE user_id = '${userId}';`)
      .first<userStats>();

   return (
      <>
         <div className="grid gap-4 md:grid-cols-3">
            <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                     Total points
                  </CardTitle>
                  <Tally5 className="h-4 w-4 text-muted-foreground" />
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">
                     {userStats ? userStats.total_points : "0"}
                  </div>
               </CardContent>
            </Card>
            <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                     Ballots submitted
                  </CardTitle>
                  <TicketCheck className="h-4 w-4 text-muted-foreground" />
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">
                     {userStats ? userStats.total_ballots : "0"}
                  </div>
               </CardContent>
            </Card>
            <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">
                     {userStats ?
                        (userStats.total_accuracy * 100).toFixed(1) + "%"
                     :  "0%"}
                  </div>
               </CardContent>
            </Card>
         </div>
         <div>
            <div className="my-7">
               <Button asChild className="w-full">
                  <Link href="/play">New Ballot</Link>
               </Button>
            </div>
            <ul className="flex flex-col gap-4">
               {ballots.map((ballot) => (
                  <li
                     className="flex flex-row items-center gap-6"
                     key={ballot.ballot_id}
                  >
                     <div className="flex-1 text-right">
                        <span>{ballot.points}</span>
                     </div>
                     <div className="flex-1">
                        <a
                           href={`/ballot/${ballot.ballot_id}`}
                           className={`${buttonVariants({
                              variant: "outline",
                           })} w-full`}
                        >
                           {ballot.title}
                        </a>
                     </div>
                     <div className="flex-1">
                        <span>{(ballot.accuracy * 100).toFixed(1)}%</span>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
}
