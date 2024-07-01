"use client";
import React, { useContext } from "react";
import InputForm from "./Input";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { BrainCircuit,User } from "lucide-react";
import { Context } from "@/context/ContextProvider";
                                                                                                           
const ChatBody = () => {

  const { onSubmit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput } = useContext(Context);

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
            {!displayResult ? (
              <div className="text-left mt-12">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-pink-700">
                  Hello, Bismay Bibhu Prakash
                </h1>
                <p className="mt-2 text-softTextColor text-4xl font-bold">
                  How can I help you?
                </p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`relative mb-2 flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="relative border-1 border-gray-700 rounded-lg bg-secondary w-[50vh] p-4 ">
                    {msg.sender === "user" ? (
                      <User
                        size={25}
                        className="absolute top-0 right-0 transform -translate-x-3.5 translate-y-3"
                      />
                    ) : (
                      <BrainCircuit size={35} className="px-2" />
                    )}
                    <p className={`text-m font-bold text-gray-500 p-2.5 ${msg.sender === "user" ? "mt-7" : "mt-1"}`}>{msg.text}</p>
                  </div>
                </div>
              ))
            )}
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
