import { auth } from "@clerk/nextjs/server";

export const runtime = "edge";

export default function BallotLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   auth().protect();

   return <>{children}</>;
}
