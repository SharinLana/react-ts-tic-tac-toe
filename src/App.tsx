import { useState, useEffect } from "react";
import "./css/board.css";
import Square from "./components/Squares";

function App() {
  const squares = Array.from({ length: 9 }, (_, i) => i.toString());
  const [boardValues, setBoardValues] = useState<string[]>(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  useEffect(() => {
    const winCombinations = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // cols
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winCombinations) {
      if (
        boardValues[a] &&
        boardValues[a] === boardValues[b] &&
        boardValues[a] === boardValues[c]
      ) {
        setWinner(boardValues[a]);
      }
    }
  }, [boardValues]);

  const handleTurns = (cellVal: string, index: number): void => {
    const updatedBoard = [...boardValues];
    updatedBoard[index] = cellVal;
    setBoardValues(updatedBoard);
    setPlayerTurn((prev) => !prev);
  };

  return (
    <>
      {winner && <p>The winner is {winner}!</p>}
      <div className="board-container">
        {squares.map((square, idx) => (
          <Square
            key={square}
            id={square}
            value={boardValues[idx]}
            playerTurn={playerTurn}
            onHandleTurns={(cellValue: string) => handleTurns(cellValue, idx)}
            disabled={boardValues[idx] !== ""}
          />
        ))}
      </div>
    </>
  );
}

export default App;
