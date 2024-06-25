"use client";
import React, { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

import { Context } from "@/context/ContextProvider";
export default function ThemeToggle() {
  const { theme, toggle } = useContext(Context);
  return (
    <Switch
      defaultSelected
      size="md"
      color="secondary"
      onChange={() => toggle("light")}
      thumbIcon={({ isSelected, className }) =>
        !isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
