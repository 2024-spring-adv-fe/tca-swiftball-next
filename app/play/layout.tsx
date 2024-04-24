import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
   title: "New Ballot - Swiftball",
};

export default function PlayLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   auth().protect();

   return <>{children}</>;
}
