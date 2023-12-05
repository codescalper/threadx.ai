"use client";
import React, { useState } from "react";
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

function Thread() {
  const [number, setNumber] = useState<number>(0);
  const [drop, setDrop] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const options = ["Techy", "Professional", "Newbie", "Funny"];
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

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
      input,
      number,
      drop,
      checked,
    });
  };

  return (
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
        {!isLoading && (
          <Button onClick={handleGenerateClick}>Generate &rarr;</Button>
        )}
        {isLoading && (
          <Button disabled>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Thread;
