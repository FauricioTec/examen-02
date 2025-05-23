import styled from "styled-components";

const StylesWrapper = styled.header`
  background: #2a7b9b;
  background: linear-gradient(
    90deg,
    rgba(42, 123, 155, 1) 0%,
    rgba(176, 150, 0, 1) 100%
  );
  height: 150px;
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Header({ text }) {
  return (
    <>
      <StylesWrapper>
        <h1>{text}</h1>
      </StylesWrapper>
    </>
  );
}
