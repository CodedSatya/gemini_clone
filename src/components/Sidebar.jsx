"use client";
import React, { useState } from "react";
import { Menu, Plus, CircleHelp, Activity, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`min-h-[100vh]  inline-flex flex-col justify-between py-6 ${
        isOpen ? "w-[15%] pl-4 pr-20" : "px-4 w-[5%]"
      } bg-secondary`}
    >
      <div>
        <Menu
          size={37}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer bg-primary rounded-full text-softTextColor px-2 py-2"
        />
        <div className="cursor-pointer mt-7 inline-flex px-3 py-1 gap-2.5 text-md items-center justify-center bg-primary rounded-full ">
          <Plus size={20} className="text-softTextColor" />
          {isOpen ? <p>New Chat</p> : null}
        </div>
        {isOpen ? (
          <div className="mt-3">
            <p className="text-gray-400 text-md">Recent</p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <CircleHelp size={30} className="px-1 py-1 rounded-full" />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <Activity size={30} className="px-1 py-1 rounded-full" />
          {isOpen ? <p>Activities</p> : null}
        </div>
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <Settings size={30} className="px-1 py-1 rounded-full" />
          {isOpen ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
