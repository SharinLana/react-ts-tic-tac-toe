import { useState, useEffect } from "react";
import "./css/board.css";
import Square from "./components/Squares";

function App() {
  const squares = Array.from({ length: 9 }, (_, i) => i.toString());
  const [boardValues, setBoardValues] = useState<string[]>(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [reloading, setReloading] = useState<string>("");
  const [counter, setCounter] = useState<number>(3);
  const [winnerIdx, setWinnerIdx] = useState<number[]>([]);

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

    // handling the draw case
    if (!boardValues.includes("")) setWinner("draw");
    // checking for a match between boardValues and winCombinations
    for (let [a, b, c] of winCombinations) {
      if (
        boardValues[a] &&
        boardValues[a] === boardValues[b] &&
        boardValues[a] === boardValues[c]
      ) {
        setWinner(boardValues[a]);
        setWinnerIdx([a, b, c])
      }
    }

    // resetting the game
    if (winner !== "" && counter > 0) {
      setTimeout(() => {
        setReloading(`Resetting the game in ${counter} ...`);
      }, 1000);
    }
    if (counter === 0) {
      window.location.reload();
    }
  }, [boardValues, winner, counter]);

  useEffect(() => {
    if (winner !== "") {
      const counterInterval = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      // cleaning up
      return () => clearInterval(counterInterval);
    }
  });

  const handleTurns = (cellVal: string, index: number): void => {
    const updatedBoard = [...boardValues];
    updatedBoard[index] = cellVal;
    setBoardValues(updatedBoard);
    setPlayerTurn((prev) => !prev);
  };

  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div className="winner-container">
        {winner && (
          <p className="winner-par">
            {winner !== "draw"
              ? `The winner is ${winner} ! 🎉 🏆`
              : "It's a draw 🤝"}
          </p>
        )}
      </div>
      <div className="board-container">
        <section className="board">
          {squares.map((square, idx) => (
            <div
              className={`square-container ${
                winnerIdx.includes(idx) && "winnerSquare"
              }`}
              key={square}
            >
              <Square
                value={boardValues[idx]}
                playerTurn={playerTurn}
                onHandleTurns={(cellValue: string) =>
                  handleTurns(cellValue, idx)
                }
                disabled={boardValues[idx] !== "" || winner !== ""}
              />
            </div>
          ))}
        </section>
      </div>
      {reloading && <p>{reloading}</p>}
    </main>
  );
}

export default App;
