'use client';
import MainBody from "@/components/MainBody";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";


export default function Home() {



  return (
    <>
      <div className="flex flex-row contain">
        <Sidebar />
        <MainBody />
      </div>
    </>
  );
}
