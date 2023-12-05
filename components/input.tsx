    "use client"
    import React, { useState } from "react";
    import { Input } from "./ui/input";

    function Topic() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [topic, setTopic] = useState<string>("");
        function handleTopicChange(event: React.ChangeEvent<HTMLInputElement>) {
            setTopic(event.target.value);
        }
        console.log(topic)

    return <div>
        <label className="text-lg font-medium leading-none mb-4 mt-5 xl:mt-15 md:mt-10">
                Topic of thread
                <Input type="text"  value={topic} onChange={handleTopicChange} className="border-2 mt-5 p-2 w-64 md:w-80 xl:w-96 rounded-md" placeholder="Ex: Rust as a programming language"/>
            </label>
    </div>;
    }

    export default Topic;
