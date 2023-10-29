  "use client"
  import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { usePathname, useRouter, useSearchParams } from "next/navigation";
  const options = ["Techy", "Professional", "Newbie", "Funny"];

  function SelectVibe({ selected }: { selected: string }) {
    // const [value, setValue] = useState("");
    // console.log(value);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
  
    const onSelect = (value: string) => {
      const current = new URLSearchParams(searchParams);
      if (!value) {
        current.delete("selected");
      } else {
        current.set("selected", value);
      }
  
      const search = current.toString();
      const query = search ? `?${search}` : "";
      console.log(query)
      router.push(`${pathname}${query}`);
    };
   

    return (
      <div className="mt-5">
        <Select onValueChange={onSelect} >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt} value={opt} >
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }
  
  export default SelectVibe;