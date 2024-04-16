import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
   const { userId }: { userId: string | null } = auth();

   const db = getRequestContext().env.DB;
   const { results: ballots } = await db
      .prepare(`SELECT * FROM ballots WHERE user_id = '${userId}';`)
      .all<Ballot>();

   return (
      <main>
         <SignedOut>
            <div>
               <h1>Swiftball</h1>
               <p>You are not signed in.</p>
            </div>
         </SignedOut>
         <SignedIn>
            <div>
               <h1>Swiftball</h1>
               <p>
                  You are signed in. See your{" "}
                  <span>
                     <Link className="text-blue-500 hover:underline" href="/profile">
                        profile
                     </Link>
                  </span>
                  .
               </p>
            </div>
         </SignedIn>
      </main>
   );
}
