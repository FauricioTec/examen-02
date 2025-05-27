import { useSelector } from "react-redux";

function Health() {
  const health = useSelector((state) => state.game.health);
  return (
    <>
      <div id="health">
        {Array.from({ length: health }).map((_, index) => (
          <span key={index}>❤️</span>
        ))}
      </div>
    </>
  );
}

export default Health;
