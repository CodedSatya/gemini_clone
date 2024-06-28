import React, { useEffect } from "react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Forward } from "lucide-react";

export default function InputForm({ onSend }) {
    const [value, setValue] = useState("");

    const handleForwardClick = () => {
      if (value.trim() !== "") {
        onSend(value)
        setValue("")
      }
    }
  
  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key === "Enter") {
        handleForwardClick();
      }
    };

    window.addEventListener("keydown", handleEnterPress);

    return () => {
      window.removeEventListener("keydown", handleEnterPress)
    };

  }, [value]);
  
  return (
    <div className="w-full flex flex-col gap-2 max-w-[50vw]">
      <div className="flex items-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          isClearable
          size="lg"
          className="w-[50vw]"
          placeholder="Ask Gemini"
          value={value}
          onValueChange={setValue}
          variant="faded"
        />
        <Forward className="bg-secondary h-8 w-8 rounded-full p-1" onClick={handleForwardClick}/>
      </div>
    </div>
  );
}
