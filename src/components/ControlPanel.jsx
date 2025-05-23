import styled from "styled-components";
import Button from "./Button";
import { useSelector } from "react-redux";
import { resetGame } from "../features/gameSlice";
import { useDispatch } from "react-redux";

const StylesWrapper = styled.section`
  color: #fff;
  background-color: #292929;
  height: 100%;
  text-align: center;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Título
const Title = styled.h2`
  font-weight: 200;
  margin: 20px 20px 0;
`;

// Lista de palabras adivinadas
const GuessedWordsList = styled.ul`
  padding: 0;
  margin: 0;
`;

const GuessedWordItem = styled.li`
  list-style: none;
`;

// Contenedor de corazones
const HealthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ControlPanel() {
  const health = useSelector((state) => state.game.health);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(resetGame());
  };

  return (
    <StylesWrapper>
      <Title>Vidas:</Title>
      <HealthContainer>
        {Array.from({ length: health }).map((_, index) => (
          <span key={index}>❤️</span>
        ))}
      </HealthContainer>

      <Title>Parejas encontradas</Title>
      <GuessedWordsList>
        {/* <GuessedWordItem>Perro - Dog</GuessedWordItem>
        <GuessedWordItem>Casa - House</GuessedWordItem> */}
      </GuessedWordsList>

      <Button onClick={handleOnClick}>Reiniciar</Button>
    </StylesWrapper>
  );
}
