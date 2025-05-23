import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
  health: 5,
  guessedWords: [],
  currentWordIndex: null,
  gameStopped: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setWords(state, action) {
      state.words = action.payload;
    },
    reduceHealth(state) {
      state.health -= 1;
    },
    addGuessedWord(state, action) {
      state.guessedWords.push(action.payload);
    },
    resetGame(state) {
      state.words = [];
      state.health = 5;
      state.guessedWords = [];
      state.gameStopped = false;
    },
  },
});

export const { setWords, reduceHealth, addGuessedWord, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;
