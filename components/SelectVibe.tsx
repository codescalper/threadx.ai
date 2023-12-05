  "use client"

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
      // console.log(selected)
      router.push(`${pathname}${query}`);
    };
   

    return (
      <div className="mt-5 xl:mt-15 md:mt-10">
         <label className="text-lg font-medium leading-none mb-4"> Select Vibe 
        <Select onValueChange={onSelect} >
          <SelectTrigger className="order-2 mt-5 p-2 w-64 md:w-80 xl:w-96 rounded-md">
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
        </label>
      </div>
    );
  }
  
  export default SelectVibe;