"use client";
import React, { useContext, useEffect } from "react";
import InputForm from "./Input";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { BrainCircuit,User } from "lucide-react";
import { Context } from "@/context/ContextProvider";
import { history } from "@/lib/gemini";               
import { content } from "../../tailwind.config";

const ChatBody = () => {

  const { onSubmit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput } = useContext(Context);

  const values = useContext(Context);

  const [messages, setMessages] = useState([]);

  const [responses, setResponses] = useState(result)
  const [prompt, setPrompt] = useState(
    {
      role: "",
      content: ""
    }
  )
                                                                                                           
  const handleSend = (message) => {
    // console.log(values.result);
    
    // console.log(messages);
    // Simulate GPT response
    setPrompt()
    console.log(message);
    console.log(history);
    onSubmit({
      role: "user",
      content: message
    })
    setMessages([...messages, { sender: "user", text: message }]);
    setTimeout(() => {
      loading ? null : setMessages(prev => [...prev, {sender: "gpt", text: result}])
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   { sender: "gpt", text: "This is a response from GPT." },
      // ]);
    }, 1000);
    
  };


  /*
  for(let i=0 ; i<history[0].parts.length(); i++){
    return (
      <div
                  key={i+1}
                  className={`relative mb-2 flex justify-end`}
                >
                  <div className="relative border-1 border-gray-700 rounded-lg bg-secondary w-[50vh] p-4 ">
                    
                      <User
                        size={25}
                        className="absolute top-0 right-0 transform -translate-x-3.5 translate-y-3"
                      />
                    <p className={`text-m font-bold text-gray-500 p-2.5 mt-7`}>{history[0].parts[i]}</p>
                  </div>
                </div>
                <div
                  key={i+1}
                  className={`relative mb-2 flex `}
                >
                  <div className="relative border-1 border-gray-700 rounded-lg bg-secondary w-[50vh] p-4 ">
                    
                      <BrainCircuit size={35} className="px-2" />
                    
                    <p className={`text-m font-bold text-gray-500 p-2.5`}>{history[1].parts[i]}</p>
                  </div>
                </div>
    )
  }
  
  */


  // useEffect(()=>{
  //   setMessages(prev => [...prev, {
  //     sender: "gpt", text: result
  //   }])
  // },result)
                                                                                                           
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
              history.map((msg, index) => (
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
