import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignedInHome from "@/components/signedInHome";

export default async function Home() {
   return (
      <div>
         <SignedOut>
            <h1>Swiftball</h1>
            <p>You are not signed in.</p>
         </SignedOut>
         <SignedIn>
            <SignedInHome />
         </SignedIn>
      </div>
   );
}
