import { getRequestContext } from "@cloudflare/next-on-pages";
import { auth } from "@clerk/nextjs/server";

export default async function PlayPage() {
   auth().protect();

   const { userId }: { userId: string | null } = auth();

   return <main>hi</main>;
}
