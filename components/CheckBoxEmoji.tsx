"use client"
import { Checkbox } from "@/components/ui/checkbox"
import React from "react";

function CheckBoxEmoji() {
  return <div className="space-x-2">
     <Checkbox id="emojis" />
      <label
        htmlFor="emojis"
        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Add emojis?
      </label>
  </div>;
}

export default CheckBoxEmoji;
