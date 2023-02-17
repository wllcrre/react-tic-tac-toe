# react-tic-tac-toe


When you were passing onSquareClick={handleClick}, you were passing the handleClick function down as a prop. You were not calling it! But now you are calling that function right away—notice the parentheses in handleClick(0)—and that’s why it runs too early. You don’t want to call handleClick until the user clicks!

問題出在：之前是傳一個 function ，現在是直接執行這個 function , 應該要等 click 後才執行。

```JSX

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

<Square value={squares[0]} onSquareClick={handleClick(0)}/>
```


To fix this, you could create a function like handleFirstSquareClick that calls handleClick(0), a function like handleSecondSquareClick that calls handleClick(1), and so on. Instead of calling them, you would pass these functions down as props like onSquareClick={handleFirstSquareClick}. This would solve the infinite loop.

解決方法是要傳一個 fucntion 該 function 是有參數 0 的，參數　１的，等等…

```JSX
<Square value={squares[0]} onSquareClick={() => {handleClick(0)}}/>
```

## save history in Game()

ref : 
https://beta.reactjs.org/learn/tutorial-tic-tac-toe#lifting-state-up-again

history = [[squares] + nextSquares] = [...squares,nextSquares];

put history in Game()

currentSquares = history[history.length - 1];

pass currentSquares into Board()

handleChick 中執行 onPlay()

onPlay() in Game()

onPlay() save history & currentSquares & xIsNext 