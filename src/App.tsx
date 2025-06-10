import { useState } from "react";
import "./css/board.css";
import Square from "./components/Squares";

function App() {
  const squares = Array.from({ length: 9 }, (_, i) => i.toString());
  const [boardValues, setBoardValues] = useState<string[]>(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState(false);

  const handleTurns = (cellVal: string, index: number): void => {
    const updatedBoard = [...boardValues];
    updatedBoard[index] = cellVal;
    setBoardValues(updatedBoard);
    setPlayerTurn((prev) => !prev);
  };

  return (
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
  );
}

export default App;
