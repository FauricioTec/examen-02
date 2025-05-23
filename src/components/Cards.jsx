import { useSelector } from "react-redux";
import styled from "styled-components";

const StylesWrapper = styled.section`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export default function Cards() {
  const words = useSelector((state) => state.game.words);

  return (
    <>
      <StylesWrapper>
        {words.map((word, index) => (
          <div className="card" key={index}>
            {word}
          </div>
        ))}
      </StylesWrapper>
    </>
  );
}
