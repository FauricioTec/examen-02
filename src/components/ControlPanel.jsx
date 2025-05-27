import Button from "./Button";
import { fetchRandomWords, resetGame, setWords } from "../features/gameSlice";
import { useDispatch } from "react-redux";
import Health from "./Health";
import GuessedWords from "./GuessedWords";


export default function ControlPanel() {
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    dispatch(resetGame());
    dispatch(fetchRandomWords());
  };

  return (
    <section id="AppControlPanel">
      <h2>Vidas:</h2>
      <Health />
      <h2>Parejas encontradas</h2>
      <GuessedWords />
      <Button onClick={handleOnClick}>Reiniciar</Button>
    </section>
  );
}
