"use client"
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function SelectVibe() {
  return <div>
  <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Techy</SelectItem>
    <SelectItem value="dark">Professional</SelectItem>
    <SelectItem value="system">Newbie</SelectItem>
    <SelectItem value="system">Funny</SelectItem>
  </SelectContent>
</Select>
  </div>;
}

export default SelectVibe;
