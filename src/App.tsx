import { useState, useEffect } from "react";
import "./css/App.css";
import Header from "./components/Header";
import WinnerTitle from "./components/WinnerTitle";
import Board from "./components/Board";
import Message from "./components/Message";

function App() {
  const squares = Array.from({ length: 9 }, (_, i) => i.toString());
  const [boardValues, setBoardValues] = useState<string[]>(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [reloading, setReloading] = useState<string>("");
  const [counter, setCounter] = useState<number>(2);
  const [winnerIdx, setWinnerIdx] = useState<number[]>([]);

  const resetState = () => {
    setBoardValues(Array(9).fill(""));
    setPlayerTurn(false);
    setWinner("");
    setReloading("");
    setCounter(2);
    setWinnerIdx([]);
  };

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
        setWinnerIdx([a, b, c]);
      }
    }

    // resetting the game
    if (winner !== "" && counter > 0) {
      setTimeout(() => {
        setReloading(`Resetting the game in ${counter} ...`);
      }, 800);
    }
    if (counter <= -1) {
      resetState();
    }
  }, [boardValues, winner, counter]);

  // modifying counter state
  useEffect(() => {
    if (winner !== "") {
      const counterInterval = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      // cleaning up
      return () => clearInterval(counterInterval);
    }
  }, [winner]);

  const handleTurns = (cellVal: string, index: number): void => {
    const updatedBoard = [...boardValues];
    updatedBoard[index] = cellVal;
    setBoardValues(updatedBoard);
    setPlayerTurn((prev) => !prev);
  };

  return (
    <main>
      <Header className="header" title="Tic-Tac-Toe" />
      <WinnerTitle winner={winner} />
      <Board
        squares={squares}
        winner={winner}
        winnerIdx={winnerIdx}
        boardValues={boardValues}
        playerTurn={playerTurn}
        onHandleTurns={handleTurns}
      />
      <Message reloading={reloading} />
    </main>
  );
}

export default App;
