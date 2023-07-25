"use client";

import { useState } from "react";

function Square({ value, cuandoHagaClick }) {
  //const [value, setValue] = useState(null);
  return (
    <button
      className={
        "bg-blue-500 py-2 px-2 rounded-lg  hover:bg-blue-700 text-white font-bold"
      }
      onClick={cuandoHagaClick}
    >
      {value}
    </button>
  );
}
// esto es un comentario para git
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handledClick(i) {
    //cambio entre las dos figuras para escojer casilla y escojer cambio de turno  
    if (squares[i]) {
      return
    }
    const nextSquare = squares.slice();

    if (xIsNext) {
      nextSquare[i] = "🐼";
    } else {
      nextSquare[i] = "🕷";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);

    // setValue('🐼');
    // setValue('🕷');
  }

  return (
    <div className={"grid grid-cols-3 gap-1 max-w-2xl"}>
      <Square value={squares[0]} cuandoHagaClick={() => handledClick(0)} />
      <Square value={squares[1]} cuandoHagaClick={() => handledClick(1)} />
      <Square value={squares[2]} cuandoHagaClick={() => handledClick(2)} />
      <Square value={squares[3]} cuandoHagaClick={() => handledClick(3)} />
      <Square value={squares[4]} cuandoHagaClick={() => handledClick(4)} />
      <Square value={squares[5]} cuandoHagaClick={() => handledClick(5)} />
      <Square value={squares[6]} cuandoHagaClick={() => handledClick(6)} />
      <Square value={squares[7]} cuandoHagaClick={() => handledClick(7)} />
      <Square value={squares[8]} cuandoHagaClick={() => handledClick(8)} />
    </div>
  );
}
