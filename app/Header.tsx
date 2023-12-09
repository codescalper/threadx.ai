import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LightDark from "@/components/LightDark";
import UserSignOut from "@/components/UserSignOut";

export default async function Header() {
  const session = await getServerSession(authOptions);

  // Determine the theme to use based on the user's system preference

  return (
    <nav
      className={`flex justify-between pr-5 pl-5 sticky h-14 items-center inset-x-0 top-0 z-30 border-b border-gray-200 dark:border-gray-700 bg-transparent backdrop-blur-lg transition-all`}
    >
      <Link legacyBehavior href="/">
        <div className="text-xl font-bold sm:text-2xl xl:text-3xl cursor-pointer">
          ThreadX
        </div>
      </Link>
      <div className="flex items-center cursor-pointer space-x-4 sm:space-x-8 lg:space-x-8 ">
        {session?.user ? (
          <UserSignOut />
        ) : (
          <Link href="/sign-in">
            <Button size="sm">Get Started</Button>
          </Link>
        )}
        <LightDark />
      </div>
    </nav>
  );
}
