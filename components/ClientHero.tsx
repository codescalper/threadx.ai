import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

import React from "react";

function ClientHero() {
  return (
    <>
      <section className="flex items-center justify-center w-full h-4/5 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d1c412] to-[#e67213] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2 ">
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
