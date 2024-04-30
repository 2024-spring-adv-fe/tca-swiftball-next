import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignedInHome from "@/components/signedInHome";
import { imFellDWPica } from "@/app/fonts";
import Link from "next/link";

export default async function Home() {
   return (
      <div>
         <SignedOut>
            <div className="flex flex-col items-center justify-center gap-3 pt-7">
               <h1
                  className={`${imFellDWPica.className} text-4xl lowercase italic`}
               >
                  Swiftball
               </h1>
               <div className="">
                  <p>
                     <Link
                        href="/sign-in"
                        className="underline hover:text-purple-400"
                     >
                        sign in
                     </Link>{" "}
                     to play :)
                  </p>
               </div>
            </div>
         </SignedOut>
         <SignedIn>
            <SignedInHome />
         </SignedIn>
      </div>
   );
}
