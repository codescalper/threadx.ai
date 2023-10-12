import { authOptions } from "@/lib/auth";
import React from "react";
import { getServerSession } from "next-auth";
import Header from "@/app/Header";
import { Input } from "@/components/ui/input";
import CheckBoxEmoji from "@/components/CheckBoxEmoji";
import SelectVibe from "@/components/SelectVibe";
import { Button } from "@/components/ui/button";

const Generate = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const emailName = session?.user?.email?.split("@")[0];

  if (session?.user) {
    return (
      <>
        <Header />
        <h1 className="selection:bg-blue-400 text-xl text-center font-bold tracking-tighter sm:text-2xl xl:text-3xl mb-5">
          Welcome, <span className="selection:text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-800">{emailName}</span>
        </h1>
        <div className="flex flex-col items-center  w-full h-screen font-medium">
          <label className="text-lg font-medium leading-none mb-4">
            Topic of thread
            <Input type="text" className="border-2 border-gray-300 p-2 w-64 md:w-80 xl:w-96 rounded-md" placeholder="Ex: Rust as a programming language"/>
          </label>
          <label className="text-lg font-medium leading-none mb-4">
            Number of threads
            <Input type="number" className="border-2 border-gray-300 p-2 w-16 rounded-md" placeholder="3"/>
          </label>
          <label className="text-lg font-medium leading-none mb-4">
            Select Vibe
            <SelectVibe />
          </label>
          <CheckBoxEmoji />
          <Button>Generate</Button>
        </div>
      </>
    );
  }

  return <div>Please log in to view the generate page.</div>;
};

export default Generate;
