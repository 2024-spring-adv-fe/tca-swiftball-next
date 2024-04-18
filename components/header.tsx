import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { imFellDWPica } from "@/app/fonts";

export default async function Header() {
   return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
         <div className="container flex h-14 max-w-screen-2xl items-center">
            <div className="mr-4 flex">
               <div className="mr-6 flex items-center space-x-2">
                  <a
                     href="/"
                     className={`${imFellDWPica.className} text-2xl lowercase italic`}
                  >
                     Swiftball
                  </a>
               </div>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-2">
               <SignedIn>
                  <UserButton />
               </SignedIn>
               <SignedOut>
                  <SignInButton>
                     <Button>Sign in</Button>
                  </SignInButton>
               </SignedOut>
            </div>
         </div>
      </header>
   );
}
