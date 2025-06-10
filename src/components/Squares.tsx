import "../css/cells.css";

interface SquareInterface {
  id: string;
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
  const handleClick = () => {
    const cellValue = playerTurn ? "O" : "X";
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
