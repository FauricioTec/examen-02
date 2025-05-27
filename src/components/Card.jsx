import { useSelector, useDispatch } from "react-redux";
import {
  fetchRandomWords,
  resetGame,
  selectCard,
  checkMatch,
} from "../features/gameSlice";
import { useEffect, useState } from "react";

export default function Card({ index, word }) {
  const dispatch = useDispatch();
  const guessedWords = useSelector((state) => state.game.guessedWords);
  const health = useSelector((state) => state.game.health);
  const selection = useSelector((state) => state.game.selection);

  const isGuessed = guessedWords.includes(word);

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isGuessed) {
      setFlipped(true);
    }
  }, [isGuessed]);

  useEffect(() => {
    if (selection.length === 2) {
      setTimeout(() => {
        dispatch(checkMatch());
        if (health <= 1) {
          dispatch(resetGame());
          dispatch(fetchRandomWords());
        }
      }, 800);
    }
  }, [selection, dispatch, health]);

  useEffect(() => {
    if (selection.length === 0 && !isGuessed) {
      setFlipped(false);
    } else if (selection.some((sel) => sel.index === index)) {
      setFlipped(true);
    }
  }, [selection, isGuessed, index]);

  const handleClick = () => {
    if (flipped || isGuessed || selection.length === 2) return;

    dispatch(selectCard({ index, word }));
  };

  return (
    <div
      className={`AppCard ${flipped ? "flipped" : ""} ${
        isGuessed ? "guessed" : ""
      }`}
      onClick={handleClick}
    >
      <div className="AppCardStyled"></div>
      <div className="AppCardValue">{word}</div>
    </div>
  );
}
