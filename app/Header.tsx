
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
            <div
            className={`flex justify-between m-4 sticky top-0`}
          >            
                <Link legacyBehavior href="/" >
                <div className="text-xl font-bold sm:text-2xl xl:text-3xl cursor-pointer">ThreadX</div>
            </Link>
            <div className="flex items-center cursor-pointer  ">
                {session?.user ? (
                    <UserSignOut />
                ) : (
                       <Link href='/sign-in'>
                       <Button size='lg'>Get Started</Button>
                       </Link>
                )}
                <LightDark />
                </div>
            </div>
        );
    }