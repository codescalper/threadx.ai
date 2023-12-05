"use client";
import React, { useRef, useState } from "react";
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
    });

  const scrollToThreads = () => {
    if (threadRef.current !== null) {
      threadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const lastMessage = messages[messages.length - 1];
  const generatedThread =
    lastMessage?.role === "assistant" ? lastMessage.content : null;

  const handleEmojiChange = (checked: boolean) => {
    setChecked(checked);
  };

  function handleNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(parseInt(event.target.value));
  }
  const onSelect = (value: string) => {
    setDrop(value);
  };

  const handleGenerateClick = () => {
    console.log({
      topic,
      number,
      drop,
      checked,
    });
  };

  const onSubmit = (e: any) => {
    setTopic(input);
    handleSubmit(e);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
          <div>
            {!isLoading && <Button type="submit">Generate &rarr;</Button>}
            {isLoading && (
              <Button disabled>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
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
                className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                ref={threadRef}
              >
                Your generated Threads🧵
              </h2>
            </div>
            <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
              {generatedThread
                .substring(generatedThread.indexOf("1") + 3)
                .split("2.")
                .map((generatedBio: string) => {
                  return (
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedBio);
                        toast("Thread copied to clipboard", {
                          icon: "🧵",
                        });
                      }}
                      key={generatedBio}
                    >
                      <p>{generatedBio}</p>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </output>
    </>
  );
}

export default Thread;
