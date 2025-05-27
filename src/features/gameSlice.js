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
  currentWord: null,
  loading: false,
  gameCounter: 0,
  selection: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setWords(state, action) {
      state.words = action.payload;
    },
    setCurrentWord(state, action) {
      state.currentWord = action.payload;
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
      state.currentWord = null;
      state.loading = false;
      state.selection = [];
      state.gameCounter += 1;
    },
    selectCard(state, action) {
      if (state.selection.length < 2) {
        state.selection.push(action.payload);
      }
    },
    clearSelection(state) {
      state.selection = [];
    },
    checkMatch(state) {
      if (state.selection.length === 2) {
        const [first, second] = state.selection;

        if (first.word === second.word && first.index !== second.index) {
          if (!state.guessedWords.includes(first.word)) {
            state.guessedWords.push(first.word);
          }
        } else {
          state.health -= 1;
        }

        state.selection = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomWords.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRandomWords.fulfilled, (state, action) => {
        state.words = action.payload.flatMap((item) => [`${item}`, `${item}`]);
        state.words = state.words
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
        state.loading = false;
      })
      .addCase(fetchRandomWords.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  setWords,
  setCurrentWord,
  reduceHealth,
  addGuessedWord,
  resetGame,
  selectCard,
  clearSelection,
  checkMatch,
} = gameSlice.actions;

export default gameSlice.reducer;
