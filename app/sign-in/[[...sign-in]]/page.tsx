import { SignIn } from "@clerk/nextjs";

export default function Page() {
   return (
      <div className="flex items-center justify-center pt-7">
         <SignIn path="/sign-in" />
      </div>
   );
}
