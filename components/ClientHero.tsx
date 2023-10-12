import { Button } from "./ui/button";

import React from "react";

function ClientHero() {
  return (
    <>
      <section className="flex items-center justify-center w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="selection:bg-blue-400 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-8xl mb-5">
                  Create amazing
                  <span className="selection:text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 ">
                     Twitter threads 
                  </span>
                  with AI
                </h1>

                <p className="selection:bg-orange-400 selection:text-black max-w-[800px] md:text-xl mx-auto ">
                  Use ThreadX to generate captivating Twitter threads effortlessly with the power of AI. Choose from a variety of topics and let the AI do the rest.
                </p>
              </div>

              <div className="w-full max-w-sm space-y-2 mx-auto">
                <Button className="bg-white text-gray-900">Try It Now</Button>
                <div className="mt-4 mx-auto flex justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientHero;
