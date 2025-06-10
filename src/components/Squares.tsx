import "../css/cells.css";
import { useState, useEffect } from "react";

interface SquareInterface {
  value: string;
  playerTurn: boolean;
  disabled: boolean;

  onHandleTurns: (cellVal: string) => void;
}
const Square = ({
  value,
  playerTurn,
  disabled,
  onHandleTurns,
}: SquareInterface) => {
  const [cellValue, setCellValue] = useState<string>("");

  const handleClick = () => {
    const cellValue = playerTurn ? "O" : "X";
    setCellValue(cellValue);
    onHandleTurns(cellValue);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`btn ${cellValue === "X" && "btn-x"} ${
        cellValue === "O" && "btn-o"
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
