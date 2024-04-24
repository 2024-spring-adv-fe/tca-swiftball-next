import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "@/app/fonts";
import "./globals.css";
import Header from "@/components/header";

export const runtime = "edge";

export const metadata: Metadata = {
   title: "Swiftball",
   description: "Swiftball — play along with the Eras Tour!",

   // PWA
   applicationName: "Swiftball",
   manifest: "/manifest.json",
   appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Swiftball",
   },
};

export const viewport: Viewport = {
   themeColor: "#ffffff",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body
               className={`${inter.className} relative flex min-h-screen flex-col bg-background`}
            >
               <Header />
               <main className="mx-auto w-full max-w-screen-lg p-4">
                  {children}
               </main>
            </body>
         </html>
      </ClerkProvider>
   );
}
