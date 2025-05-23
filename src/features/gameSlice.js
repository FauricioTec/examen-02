import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRandomWords = createAsyncThunk(
  "game/fetchWords",
  async () => {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=6&lang=es"
    );
    return await response.json();
  }
);

const initialState = {
  words: [],
  health: 5,
  guessedWords: [],
  currentWordIndex: null,
  gameStopped: false,
  loading: false, // agrega para controlar estado de carga
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
      state.currentWordIndex = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomWords.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRandomWords.fulfilled, (state, action) => {
        state.words = action.payload;
        state.loading = false;
      })
      .addCase(fetchRandomWords.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setWords, reduceHealth, addGuessedWord, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;
