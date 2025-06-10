interface SquareInterface {
  id: string;
  value: string;
}
const Square = ({ id, value }: SquareInterface) => {
  return <button type="button">{value}</button>;
};

export default Square;