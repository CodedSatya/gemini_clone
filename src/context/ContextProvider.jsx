"use client";
import run from "@/lib/gemini";
import React, { createContext, useState } from "react";
export const Context = createContext();



const ContextProvider = ({ children }) => {
  
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [recentPrompts, setRecentPrompts] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [prevPrompts, setPrevPrompts] = useState([]);

  //Typewriter Effect
  // const paragraphDelay = (index, newWord) => {
  //   setTimeout(() => {
  //     setResult((prev) => prev + newWord);
  //   }, 70 * index);
  // };
  // Submit Handler


  


  const onSubmit = async ( prompt, setMessage, message) => {
    setLoading(true);
    setDisplayResult(true);
    setInput(prompt)
    setRecentPrompts(input);

    if (input && prompt) {
      setPrevPrompts((prev) => [...prev, input]);
    }

    const response = input ? await run(input, setMessage) : await run(prompt, setMessage);

    const boldResponse = response.split("**");
    let newArray = "";
    for (let i = 0; i < boldResponse.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newArray += boldResponse[i];
      } else {
        newArray += "<b>" + boldResponse[i] + "</b>";
      }
    }
    let newRes = newArray.split("*").join("</br>");
    let newRes2 = newRes.split(" ");


    const promises = []
    for (let i = 0; i < newRes2.length; i++) {
      const newWord = newRes2[i];
      promises.push(new Promise((resolve) => {
        setTimeout(() => {
          resolve(newWord + " ");
        }, 70 * i);
      }));
    }
  
    await Promise.all(promises);


    setResult(newRes2.join(" "))

    // for (let i = 0; i < newRes2.length; i++) {
    //   const newWord = newRes2[i];
    //   paragraphDelay(i, newWord + " ");
    // }
    setLoading(false);
    // setResult(response)
    setInput("");

}
  
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  const contextValue = {
    theme,
    input,
    result,
    loading,
    displayResult,
    recentPrompts,
    prevPrompts,
    onSubmit,
    toggle,
    setInput,
    setRecentPrompts,
    setPrevPrompts,
    setDisplayResult,
  };

  return (
    <Context.Provider value={contextValue}>
      <div className={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;
