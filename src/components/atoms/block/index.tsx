import { blockElement } from "@/constant";
import React from "react";

type propType = {
  text: String;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  disable: Boolean;
};

export default function Block({ text, handleClick, disable }: propType) {
  function getStyle() {
    return text === blockElement.x
      ? "bg-yellow-300"
      : text === blockElement.o
      ? "bg-red-300"
      : "bg-indigo-300";
  }

  function getOpacity() {
    if (disable) {
      return " opacity-25";
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`aspect-square flex justify-center items-center shadow-lg shadow-cyan-500/50 rounded-2xl cursor-pointer 
      ${getStyle()} ${getOpacity()} `}
    >
      <h1 className="font-bold text-4xl md:text-7xl lg:text-9xl">{text}</h1>
    </div>
  );
}
