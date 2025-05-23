import Cards from "../components/Cards";
import Header from "../components/Header";
import ControlPanel from "../components/ControlPanel";
import styled from "styled-components";

export default function MainLayout() {
  const MainContainer = styled.main`
    display: flex;
    align-items: center;
    width: 1000px;
    justify-content: center;
    height: 100%;
  `;

  return (
    <>
      <Header text="Encuentra la pareja" />
      <MainContainer>
        <Cards />
        <ControlPanel />
      </MainContainer>
    </>
  );
}
