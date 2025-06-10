import "./App.css";
import Square from "./components/Squares";

function App() {
  const squares = Array.from({ length: 9 }, (_, i) => i.toString());

  return (
    <>
      {squares.map((square) => (
        <Square key={square} id={square}/>
      ))}
    </>
  );
}

export default App;
