import { useSelector } from "react-redux";
import Card from "./Card";

export default function Cards() {

  const words = useSelector((state) => state.game.words);
  const gameCounter = useSelector((state) => state.game.gameCounter);

  return (
    <>
      <section id="AppCards">
        {words.map((word, index) => (
          <Card
            key={`${index}-${gameCounter}`}
            index={index}
            word={word}
          />
        ))}
      </section>
    </>
  );
}
