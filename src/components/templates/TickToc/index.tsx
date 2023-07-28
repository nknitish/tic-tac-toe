"use client";
import Block from "@/components/atoms/block";
import { blockElement } from "@/constant";
import React, { useState } from "react";
import { checkWinner } from "./utilities";
import Button from "@/components/atoms/button";

type resultType = {
  msg: string;
  index: number[];
};

export default function TicToc() {
  const [block, setBlock] = useState(Array(9).fill(""));
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [result, setResult] = useState<resultType>({
    msg: "",
    index: [],
  });

  const handleClick = (i: number) => {
    //Clone of existing block
    let blockCopy = [...block];

    //If block is already filled then don;t do anything
    if (blockCopy[i] || result?.msg) return;

    //Assigning value
    blockCopy[i] = isPlayerX ? blockElement.x : blockElement.o;

    //Saving newState
    setBlock(blockCopy);

    //Changing turn of players
    setIsPlayerX(!isPlayerX);

    //Set the winner
    let response = checkWinner(blockCopy);

    if (response) {
      setResult(response);
    }
  };

  const handleReset = () => {
    setBlock(Array(9).fill(""));
    setResult({
      msg: "",
      index: [],
    });
    setIsPlayerX(true);
  };

  const checkDisable = (index: number) => {
    //Check if Result is announced

    if (result.msg) {
      //If current index make winning array then don't disable it
      if (result.index.includes(index)) {
        return false;
      }

      //Else disable
      return true;
    }

    //Return false if result is not announced
    return false;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-5 w-4/5 md:w-3/5 lg:w-2/5">
        {block.map((e, i) => (
          <Block
            key={i}
            text={e}
            handleClick={() => handleClick(i)}
            disable={checkDisable(i)}
          />
        ))}
      </div>
      <h1 className="m-10 text-2xl md:text-3xl text-center">{result?.msg}</h1>
      <Button text={"Reset"} handleClick={handleReset} />
    </div>
  );
}
