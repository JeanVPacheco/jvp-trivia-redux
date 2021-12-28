import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  settings: {
    difficulty: 'medium',
    numberOfQ: 5
  },
  status: 'idle',
  username: '',
  points: 0
};

export const fetchQuestions = createAsyncThunk('game/fetchQuestions', async (arg, { getState }) => {
  const state = getState();
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${state.game.settings.numberOfQ}&difficulty=${state.game.settings.difficulty}&token=${state.setup.token}&encode=base64`
  );
  const { results } = await response.json();
  return results;
});

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    usernameRegister(state, action) {
      const { username } = action.payload;
      state.username = username;
    },
    changeSettings(state, action) {
      const { gameDiff, gameNQ } = action.payload;
      state.settings.difficulty = gameDiff;
      state.settings.numberOfQ = gameNQ;
      state.status = 'idle';
    },
    addPoints(state, action) {
      const { sumPoints } = action.payload;
      state.points += sumPoints;
    },
    resetGame(state) {
      state.questions = [];
      state.status = 'idle';
      state.points = 0;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { usernameRegister, changeSettings, addPoints, resetGame } = gameSlice.actions;

export default gameSlice.reducer;

export const selectEveryQuestion = (state) => state.game.questions;
export const selectGameSettings = (state) => state.game.settings;
export const selectCurrentPlayer = (state) => state.game.username;
export const selectCurrentDifficulty = (state) => state.game.settings.difficulty;
