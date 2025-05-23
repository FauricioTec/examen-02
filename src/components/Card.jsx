import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100px;
  height: 150px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  margin: 10px;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  &.flipped,
  &.guessed {
    transform: rotateY(180deg);
  }

  &.flipped ${"" /* referencia a componente anidado */} > div,
  &.guessed > div {
    display: block;
  }
`;

const CardInner = styled.div`
  cursor: pointer;
  width: 100px;
  height: 150px;
  background-color: #1a1a1a;
  transition: all 0.2s;
  border-radius: 20px;

  &:hover {
    transform: scale(0.98);
  }
`;

const CardValue = styled.div`
  display: none;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 0;
  text-align: center;
  width: 100%;
  transform: rotateY(180deg);
`;

export default function Card({ value, flipped, guessed }) {
  return (
    <CardWrapper
      className={`${flipped ? "flipped" : ""} ${guessed ? "guessed" : ""}`}
    >
      <CardInner>
        <CardValue>{value}</CardValue>
      </CardInner>
    </CardWrapper>
  );
}
