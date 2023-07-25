  'use client'

import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('🐼');
    setValue( '🕷');
  }

  return (
    <button
      className={
        "bg-blue-500 py-2 px-2 rounded-lg  hover:bg-blue-700 text-white font-bold"
      } 
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className={"grid grid-cols-3 gap-1 max-w-2xl "}>
      <Square value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
    </div>
  );
}
