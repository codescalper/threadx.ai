"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { useChat } from "ai/react";
import toast, { Toaster } from "react-hot-toast";

function Thread() {
  const [number, setNumber] = useState<number>(1);
  const [topic, setTopic] = useState<string>("");
  const [drop, setDrop] = useState<string>("Techy");
  const [checked, setChecked] = useState<boolean>(false);
  const threadRef = useRef<null | HTMLDivElement>(null);
  const options = ["Techy", "Professional", "Newbie", "Funny"];

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: {
        topic,
        number,
        drop,
        checked,
      },
      onResponse() {
        scrollToThreads();
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  console.log(checked);

  const scrollToThreads = () => {
    if (threadRef.current !== null) {
      threadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const lastMessage = messages[messages.length - 1];
  const generatedThread =
    lastMessage?.role === "assistant" ? lastMessage.content : null;

  const splittedArray = [];
  // Initialize the current index to 0
  let currentIndex = 0;

  // Loop from 1 to num
  if (generatedThread) {
    for (let i = 1; i <= number; i++) {
      // Find the next index by searching for the number followed by a dot and a space
      let nextIndex = generatedThread.indexOf(`${i + 1}. `, currentIndex);
      // If the next index is not found, set it to the length of the string
      if (nextIndex === -1) {
        nextIndex = generatedThread.length;
      }
      // Slice the string from the current index to the next index and push it to the array
      splittedArray.push(generatedThread.slice(currentIndex, nextIndex));
      // Update the current index to the next index
      currentIndex = nextIndex;
    }
  }

  const handleEmojiChange = (checked: boolean) => {
    setChecked(checked);
  };

  function handleNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(parseInt(event.target.value));
  }
  const onSelect = (value: string) => {
    setDrop(value);
  };

  // * This is for debugging purposes
  const handleGenerateClick = () => {
    console.log({
      topic,
      number,
      drop,
      checked,
    });
  };
  useEffect(() => {
    setTopic(input);
  }, [input]);
  const onSubmit = (e: any) => {
    e.preventDefault();

    handleSubmit(e);
  };

  return (
    <>
      <form>
        <div className="text-lg font-medium leading-none mb-4 mt-5 xl:mt-15 md:mt-10 space-y-3 xl:space-y-5">
          <label>
            Topic of thread
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="border-2 mt-5 mb-5 p-2 w-64 md:w-80 xl:w-96 rounded-md"
              placeholder="Ex: Rust as a programming language"
            />
          </label>

          <label>
            Number of threads
            <Input
              type="number"
              value={number}
              onChange={handleNumberChange}
              className=" border-2 mt-5 mb-5 p-2 w-64 md:w-80 xl:w-96 rounded-md"
              placeholder="3"
            />
          </label>
          <label className="text-lg font-medium leading-none mb-4">
            {" "}
            Select Vibe
            <Select onValueChange={onSelect}>
              <SelectTrigger className="order-2 mt-5 p-2 w-64 md:w-80 xl:w-96 rounded-md">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>

          <Checkbox
            className="mr-3"
            id="emojis"
            onCheckedChange={handleEmojiChange}
          />
          <label
            htmlFor="emojis"
            className="text-lg space-x-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Add emojis?
          </label>
          <div className="pt-5 xl:pt-5">
            {!isLoading && <Button onClick={onSubmit}>Generate &rarr;</Button>}
            {isLoading && (
              <Button disabled>
                <span className="animate-ping absolute inline-flex h-[10px] w-[10px] rounded-full bg-yellow-400 opacity-75"></span>
              </Button>
            )}
          </div>
        </div>
      </form>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
      <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
      <output className="space-y-10 my-10">
        {generatedThread && (
          <>
            <div>
              <h2
                className="sm:text-4xl text-3xl font-bold mx-auto"
                ref={threadRef}
              >
                Your generated <span className="text-gradient"> Threads🧵</span>
              </h2>
            </div>

            <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
              {splittedArray.map((generatedBio, index) => (
                <div
                  className="bg-white dark:bg-black/75 rounded-xl shadow-xl shadow-orange-400 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-copy border"
                  onClick={() => {
                    navigator.clipboard.writeText(generatedBio);
                    // Assuming you have a library like react-toastify for toasts
                    toast("Thread copied to clipboard", {
                      icon: "🧵",
                    });
                  }}
                  key={index} // Use index as the key instead of generatedBio
                >
                  <p>{generatedBio}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </output>
    </>
  );
}

export default Thread;
