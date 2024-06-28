"use client";
import React from "react";
import InputForm from "./Input";
import { useState } from "react";
import { ScrollShadow, Avatar } from "@nextui-org/react";
import { BrainCircuit } from "lucide-react";

const ChatBody = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { sender: "user", text: message }]);
    // Simulate GPT response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "gpt", text: "This is a response from GPT." },
      ]);
    }, 1000);
  };

  return (
    <div className=" flex h-[85%] pt-4 overflow-scroll mb-6 overflow-x-hidden no-scrollbar justify-center">
      <ScrollShadow hideScrollBar className=" h-[100%] w-[80%] justify-center ">
        <div className="w-[100%] justify-center ">
          <div className="w-[100%] h-[80vh]">
            {messages.map((msg, index) => (
            <div
              key={index}
              className={`relative mb-2 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
                <div className=" border-1 border-gray-700 rounded-lg bg-secondary w-[50vh] p-4 ">
                  {
                    msg.sender === "user" ? <Avatar size="sm" isBordered className="flex items-end p-3" color="primary" name="User" /> : <BrainCircuit size={35}  className="px-2"/> 
                  }
                <p className="text-m font-bold text-gray-500">{msg.text}</p>
              </div>
            </div>
          ))}
            {/* <h1 className="mt-12">
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">
          Hello, Bismay Bibhu Prakash
          </span>
          </h1>
          <p className="mt-2 text-gray-400 text-4xl font-bold">How can i help you?</p> */}
          </div>
        </div>
      </ScrollShadow>
      <div className="absolute bottom-4">
        <InputForm onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatBody;
