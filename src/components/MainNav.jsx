'use client';
import React from "react";
import { UserCircleIcon } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const MainNav = () => {
  return (
    <div className={`flex h-[7%] justify-between items-center px-7 pt-4`}>
      <div className="flex">
        <h1 className="text-2xl text-gray-500">Gemini</h1>
      </div>
      <div className="flex gap-1 items-center">
        <div>
          <ThemeToggle />
        </div>
        <UserCircleIcon size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default MainNav;
