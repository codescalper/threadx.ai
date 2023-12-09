import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

import React from "react";

function ClientHero() {
  return (
    <>
      <section className="flex items-center justify-center w-full h-4/5 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="selection:bg-blue-400 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-8xl mb-5">
                  Create amazing
                  <span className="text-gradient selection:text-white bg-clip-text text-transparent ">
                     Twitter threads 
                  </span>
                  with AI
                </h1>

                <p className="selection:bg-orange-400 selection:text-black max-w-[800px] md:text-xl mx-auto ">
                  Use ThreadX to generate captivating Twitter threads
                  effortlessly with the power of AI. Choose from a variety of
                  vibes and let the AI do the rest.
                </p>
              </div>

              <div className="w-full max-w-sm space-y-2 mx-auto">
                <a href="https://github.com/codescalper/threadX" target="blank">
                  <Button
                    size="default"
                    className="bg-white text-black hover:bg-white shadow-lg dark:hover:shadow-yellow-400 hover:shadow-orange-500 dark:shadow-zinc-500 transition duration-200"
                  >
                    <FaGithub size={24} />  Star on Github
                  </Button>
                </a>
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
