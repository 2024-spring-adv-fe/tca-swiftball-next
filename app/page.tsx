import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import type { Ballot } from "@/lib/types/ballot";
import SignedInHome from "@/components/signedInHome";

export default async function Home() {
   const { userId }: { userId: string | null } = auth();

   const db = getRequestContext().env.DB;
   const { results: ballots } = await db
      .prepare(`SELECT * FROM ballots WHERE user_id = '${userId}';`)
      .all<Ballot>();

   return (
      <main className="m-4 flex-1">
         <SignedOut>
            <div>
               <h1>Swiftball</h1>
               <p>You are not signed in.</p>
            </div>
         </SignedOut>
         <SignedIn>
            <div>
               <SignedInHome />
            </div>
         </SignedIn>
      </main>
   );
}
