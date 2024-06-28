import React from "react";
import MainNav from "./MainNav";
import ChatBody from "./ChatBody";

const MainBody = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          <MainNav />
          <ChatBody />
        </div>
      </div>
    </>
  );
};

export default MainBody;
