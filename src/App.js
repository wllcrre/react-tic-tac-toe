import { useEffect, useState } from 'react';
import React from "react";


function Square() {
  return (
    <button className="square">
    </button>
  )
}

export default function Board() {
  return (
    <div className="game-board">
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
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>  
  );
}