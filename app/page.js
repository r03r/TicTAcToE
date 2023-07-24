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
  return (
    <div className={"grid grid-cols-3 gap-1 max-w-2xl "}>
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
      <Square value="1"/>
      <Square value="1"/>
      <Square value="1"/>
      <Square value="1"/>
      <Square value="1"/>
      <Square value="1"/>
    </div>
  );
}
