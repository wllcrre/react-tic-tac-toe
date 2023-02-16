import { useEffect, useState } from 'react';
import React from "react";



function Square({value}) {
  // const [value,setValue] = useState(null);
  
  function onSquareClick(){
    console.log('click');
    // setValue('X');
  }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <div className="game-board">
      <div className='board-row'>
        <Square value={1}/>
        <Square value={2}/>
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>  
  );
}