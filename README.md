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