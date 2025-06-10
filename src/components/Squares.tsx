interface SquareInterface {
  id: string;
  value: string;
  playerTurn: boolean;
  onHandleTurns: (cellVal: string) => void;
}
const Square = ({ id, value, playerTurn, onHandleTurns }: SquareInterface) => {
  const handleClick= () => {
    const cellValue = playerTurn ? "O" : "X";
    onHandleTurns(cellValue);
  }
  return <button type="button" onClick={handleClick}>{value}</button>;
};

export default Square;