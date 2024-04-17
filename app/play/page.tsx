import { auth } from "@clerk/nextjs/server";
import BallotForm from "@/components/newBallotForm";

export default async function PlayPage() {
   auth().protect();

   const { userId }: { userId: string | null } = auth();

   return (
      <main>
         <BallotForm />
      </main>
   );
}
