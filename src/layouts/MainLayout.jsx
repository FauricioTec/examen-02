import AppCards from "../components/AppCards";
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

  return (
    <>
      <Header text="Encuentra la pareja" />
      <main>
        <AppCards />
        <ControlPanel />
      </main>
    </>
  );
}
