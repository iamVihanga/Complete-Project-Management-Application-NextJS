"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();
  const isSigninPage = pathname === "/sign-in";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={"/assets/logo.svg"} alt="Logo" width={152} height={56} />
          <Button variant={"secondary"} asChild>
            <Link href={isSigninPage ? "/sign-up" : "/sign-in"}>
              {isSigninPage ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
