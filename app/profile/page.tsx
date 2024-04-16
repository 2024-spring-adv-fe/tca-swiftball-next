import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";

export default async function Profile() {
   auth().protect();

   const { userId }: { userId: string | null } = auth();

   const db = getRequestContext().env.DB;
   const { results: ballots } = await db
      .prepare(`SELECT * FROM ballots WHERE user_id = '${userId}';`)
      .all<Ballot>();

   return (
      <main>
         <div>
            {ballots.map((ballot) => (
               <ul className="my-5">
                  <li>{ballot.ballot_id}</li>
                  <li>{ballot.user_id}</li>
                  <li>{ballot.title}</li>
               </ul>
            ))}
         </div>
      </main>
   );
}