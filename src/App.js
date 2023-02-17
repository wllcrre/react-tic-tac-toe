import { useEffect, useState } from 'react';
import React from "react";

function Square({value,onSquareClick}) {
  
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

function Board({xIsNext, squares, onPlay}) {
  //這裏 winner 是 const, 因為 Board 每一手都會 re-render，所以一手只會有一個值：X or O or null
  const winner = calculateWinner(squares);

  let status;
  if(winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player: " + (xIsNext? "X" : "O");
  }

  console.log(squares);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }


  return (
    <>
      <p>{status}</p>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>  
  );
}

export default function Game() {

  // important! : 注意 history 的 data format 是 [[]]
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // important! : 注意 history 的 data format 是 [[]]
    setHistory([...history,nextSquares]);
    
    setXIsNext(!xIsNext);

    console.log(history);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}