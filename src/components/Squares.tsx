interface SquareInterface {
  id: string;
}
const Square = ({ id }: SquareInterface) => {
  return <button type="button">{id}</button>;
};

export default Square;