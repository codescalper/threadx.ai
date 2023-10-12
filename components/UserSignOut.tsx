"use client"
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react";

function UserSignOut() {
  return <>

<Button onClick={()=>signOut({
    redirect:true,
    callbackUrl:`${window.location.origin}/sign-in`
})} variant='destructive'>Log Out</Button>

  </>;
}

export default UserSignOut;
