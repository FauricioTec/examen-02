import { useSelector } from "react-redux";

function GuessedWords() {
  const guessedWords = useSelector((state) => state.game.guessedWords);
  const gameCounter = useSelector((state) => state.game.gameCounter);

  return (
    <ul id="gussedWords">
      {guessedWords.map((word, index) => (
        <li key={`${index}-${gameCounter}`}>
          {word}
        </li>
      ))}
    </ul>
  );
}

export default GuessedWords;
