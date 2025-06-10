import "./css/board.css";
import Square from "./components/Squares";

function App() {
  const squares = Array.from({ length: 9 }, (_, i) => i.toString());

  return (
    <div className="board-container">
      {squares.map((square) => (
        <Square key={square} id={square}/>
      ))}
    </div>
  );
}

export default App;
