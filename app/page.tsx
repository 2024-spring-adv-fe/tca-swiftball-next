import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <SignedOut>
            <div>
               <h1>Swiftball</h1>
               <p>You are not signed in.</p>
            </div>
         </SignedOut>
         <SignedIn></SignedIn>
      </main>
   );
}
