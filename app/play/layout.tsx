import { auth } from "@clerk/nextjs/server";

export const runtime = "edge";

export default function PlayLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   auth().protect();

   return <>{children}</>;
}
