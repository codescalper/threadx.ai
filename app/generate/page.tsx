import { authOptions } from "@/lib/auth";
import React from "react";
import { getServerSession } from "next-auth";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
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
      <div>
        <h1 className="selection:bg-blue-400 text-xl text-center font-bold tracking-tighter mt-5 sm:text-2xl xl:text-3xl mb-5 ">
          Welcome,{" "}
          <span className="selection:text-white bg-clip-text text-transparent text-gradient">
            {emailName}
          </span>
        </h1>
        <div className="flex flex-col items-center w-full h-screen font-medium">
          <Thread />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full h-4/5 selection:bg-blue-400 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl">
        Please login to see{" "}
        <span className="selection:text-white bg-clip-text text-transparent text-gradient">
           Generate 
        </span>{" "}
        page
      </div>
      <Footer />
    </>
  );
};

export default Generate;
