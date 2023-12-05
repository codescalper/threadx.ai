"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

function CheckBoxEmoji() {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
    console.log(checked);
  };

  return (
    <div>
      <Checkbox className="mr-3" id="emojis" onCheckedChange={handleChange} />
      <label
        htmlFor="emojis"
        className="text-lg space-x-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Add emojis?
      </label>
    </div>
  );
}

export default CheckBoxEmoji;
