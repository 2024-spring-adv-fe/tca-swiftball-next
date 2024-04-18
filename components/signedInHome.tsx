"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";
import type { Ballot } from "@/lib/types/ballot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tally5, TicketCheck, Target } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

type userStats = {
   total_ballots: number;
   total_points: number;
   avg_points: number;
   total_accuracy: number;
};

export default async function SignedInHome() {
   auth().protect();

   const { userId }: { userId: string | null } = auth();

   const db = getRequestContext().env.DB;
   const { results: ballots } = await db
      .prepare(
         `SELECT ballot_id, points, title, accuracy FROM ballots WHERE user_id = '${userId}';`,
      )
      .all<Ballot>();

   const userStats = await db
      .prepare(`SELECT * FROM user_stats WHERE user_id = '${userId}';`)
      .first<userStats>();

   return (
      <>
         {userStats && (
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
                        {userStats.total_points}
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
                        {userStats.total_ballots}
                     </div>
                     {userStats.total_ballots <= 0 && (
                        <p className="text-xs text-muted-foreground">
                           You haven't submitted any ballots yet!
                        </p>
                     )}
                  </CardContent>
               </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">
                        Accuracy
                     </CardTitle>
                     <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">
                        {(userStats.total_accuracy * 100).toFixed(1)}%
                     </div>
                  </CardContent>
               </Card>
            </div>
         )}
         <div className="mt-7">
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
