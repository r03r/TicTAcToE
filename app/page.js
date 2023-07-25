  'use client'

import { useState } from "react";

function Square({value, onSquareClick}) {
  //const [value, setValue] = useState(null);
  return (
    <button
      className={"bg-blue-500 py-2 px-2 rounded-lg  hover:bg-blue-700 text-white font-bold"}onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handledClick(i) {
    const nextSquare = squares.slice();
    nextSquare[i] = '🐼';
    setSquares(nextSquare)

   // setValue('🐼');
   // setValue('🕷');
  }

  return (
    <div className={"grid grid-cols-3 gap-1 max-w-2xl"}>
      <Square value={squares[0]}onSquareClick={()=>handledClick(0)}/>
      <Square value={squares[1]}onSquareClick={()=>handledClick(1)}/>
      <Square value={squares[2]}onSquareClick={()=>handledClick(2)}/>
      <Square value={squares[3]}onSquareClick={()=>handledClick(2)}/>
      <Square value={squares[4]}onSquareClick={()=>handledClick(4)}/>
      <Square value={squares[5]}onSquareClick={()=>handledClick(5)}/>
      <Square value={squares[6]}onSquareClick={()=>handledClick(6)}/>
      <Square value={squares[7]}onSquareClick={()=>handledClick(7)}/>
      <Square value={squares[8]}onSquareClick={()=>handledClick(8)}/>
    </div>
  );
}
