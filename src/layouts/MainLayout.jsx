import Cards from "../components/Cards";
import Header from "../components/Header";
import ControlPanel from "../components/ControlPanel";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRandomWords } from "../features/gameSlice";

export default function MainLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomWords());
  }, [dispatch]);

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
