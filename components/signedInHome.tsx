"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";
import type { Ballot } from "@/lib/types/ballot";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { TicketIcon, TrophyIcon } from "@heroicons/react/24/outline";

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
      .prepare(`SELECT * FROM ballots WHERE user_id = '${userId}';`)
      .all<Ballot>();

   const userStats = await db
      .prepare(`SELECT * FROM user_stats WHERE user_id = '${userId}';`)
      .first<userStats>();

   return (
      <main>
         {userStats && (
            <div className="grid gap-4 md:grid-cols-3">
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">
                        Ballots submitted
                     </CardTitle>
                     <TicketIcon className="h-4 w-4 text-muted-foreground" />
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
                        Total points
                     </CardTitle>
                     <TrophyIcon className="h-4 w-4 text-muted-foreground" />
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
                        Accuracy
                     </CardTitle>
                     <TrophyIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">
                        {(userStats.total_accuracy * 100).toFixed(1)}%
                     </div>
                  </CardContent>
               </Card>
            </div>
         )}
         <div>
            {ballots.map((ballot) => (
               <ul className="my-5">
                  <li>{ballot.ballot_id}</li>
                  <li>{ballot.user_id}</li>
                  <li>
                     <a
                        href={`/ballot/${ballot.ballot_id}`}
                        className="text-blue-500 hover:underline"
                     >
                        {ballot.title}
                     </a>
                  </li>
                  <li>{ballot.points}</li>
                  <li>{ballot.accuracy}</li>
               </ul>
            ))}
         </div>
      </main>
   );
}
