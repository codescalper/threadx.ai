import { authOptions } from "@/lib/auth";
import React, { useState } from "react";
import { getServerSession } from "next-auth";
import Header from "@/app/Header";
import { Input } from "@/components/ui/input";
import SelectVibe from "@/components/SelectVibe";
import CheckBoxEmoji from "@/components/CheckBoxEmoji";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Topic from "@/components/input";
import Number from "@/components/Number";
import Thread from "@/components/Thread";

const Generate = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const selectedSearch = searchParams?.selected ?? "";
  const selected = Array.isArray(selectedSearch)
    ? selectedSearch[0]
    : selectedSearch;
  console.log(`${selected}`);
  const session = await getServerSession(authOptions);
  console.log(session);
  const emailName = session?.user?.email?.split("@")[0];

  if (session?.user) {
    return (
      <>
        <Header />
        <h1 className="selection:bg-blue-400 text-xl text-center font-bold tracking-tighter sm:text-2xl xl:text-3xl mb-5">
          Welcome,{" "}
          <span className="selection:text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-800">
            {emailName}
          </span>
        </h1>
        <div className="flex flex-col items-center w-full h-screen font-medium">
          <Thread />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full h-screen selection:bg-blue-400 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-8xl ">
        Please login to see{" "}
        <span className="selection:text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 ">
          {" "}
          Generate{" "}
        </span>{" "}
        page
      </div>
      <Footer />
    </>
  );
};

export default Generate;
