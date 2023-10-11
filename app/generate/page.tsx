import { authOptions } from "@/lib/auth";
import React from "react";
import { getServerSession } from "next-auth";
import Header from "@/app/Header";

const Generate = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const emailName = session?.user?.email?.split("@")[0];

  if (session?.user) {
    return (
      <>
        <Header />
        Welcome {emailName}
      </>
    );
  }

  return <div>Please login to see generate page</div>;
};

export default Generate;