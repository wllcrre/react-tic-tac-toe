import { useEffect, useState } from 'react';
import React from "react";



function Square({value,onSquareClick}) {
  // const [value,setValue] = useState(null);
  
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  console.log(squares);

  function handleClick() {
    console.log('handle Click func');
  }


  return (
    <div className="game-board">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>  
  );
}