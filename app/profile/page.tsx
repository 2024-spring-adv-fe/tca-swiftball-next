"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";
import type { Ballot } from "@/lib/types/ballot";
import { UserButton } from "@clerk/nextjs";

type userStats = {
   total_ballots: number;
   total_points: number;
   avg_points: number;
   total_accuracy: number;
};

export default async function Profile() {
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
         <div>
            <UserButton />
         </div>
         {userStats && (
            <div>
               <h1>Profile Stats</h1>
               <p>Total Ballots: {userStats.total_ballots}</p>
               <p>Total Points: {userStats.total_points}</p>
               <p>Avg Points: {userStats.avg_points}</p>
               <p>Total Accuracy: {userStats.total_accuracy}</p>
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
