import "../css/Square.css";

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

  const handleClick = () => {
    const cellValue = playerTurn ? "O" : "X";
    onHandleTurns(cellValue);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`btn ${value === "X" && "btn-x"} ${
        value === "O" && "btn-o"
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
