import "../css/Winner-title.css";

interface WinnerInterface {
  winner: string;
}
const WinnerTitle = ({ winner }: WinnerInterface) => {
  return (
    <div className="winner-container">
      {winner && (
        <p className="winner-par">
          {winner !== "draw"
            ? `The winner is ${winner} ! 🎉 🏆`
            : "It's a draw 🤝"}
        </p>
      )}
    </div>
  );
};

export default WinnerTitle;
