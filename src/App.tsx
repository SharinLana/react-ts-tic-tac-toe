import {useState} from "react";
import "./css/board.css";
import Square from "./components/Squares";

function App() {
  const squares = Array.from({ length: 9 }, (_, i) => i.toString());
  const [boardValues, setBoardValues] = useState(Array(9).fill(""));

  return (
    <div className="board-container">
      {squares.map((square, idx) => (
        <Square key={square} id={square} value={boardValues[idx]} />
      ))}
    </div>
  );
}

export default App;
