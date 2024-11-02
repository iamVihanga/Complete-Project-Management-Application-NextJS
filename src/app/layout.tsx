import type { Metadata } from "next";

import { fontHeading, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          "antialiased font-sans min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
