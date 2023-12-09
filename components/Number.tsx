"use client"
import React, { useState } from "react";
import { Input } from "./ui/input";

function Number() {
    const [number, setNumber] = useState<number>(0);



    function handleNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumber(parseInt(event.target.value));
    }

    console.log(number)
  return <>
    <label className="text-lg font-medium leading-none mb-4 mt-5 xl:mt-15 md:mt-10">
            Number of threads
            <Input type="number" value={number} onChange={handleNumberChange} className=" border-2 mt-5 p-2 w-64 md:w-80 xl:w-96 rounded-md" placeholder="3"/>
          </label>
  </>;
}

export default Number;
