import Square from "./Square";
import "../css/Board.css";

interface BoardInterface {
  squares: string[];
  winner: string;
  winnerIdx: number[];
  boardValues: string[];
  playerTurn: boolean;
  onHandleTurns: (cellVal: string, idx: number) => void;
}
const Board = ({
  squares,
  winner,
  winnerIdx,
  boardValues,
  playerTurn,
  onHandleTurns,
}: BoardInterface) => {
  return (
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
                onHandleTurns(cellValue, idx)
              }
              disabled={boardValues[idx] !== "" || winner !== ""}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Board;
