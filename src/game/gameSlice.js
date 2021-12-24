import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  difficulty: 'medium',
  numberOfQ: 5,
  currentQ: 0,
  status: 'idle'
};

export const fetchQuestions = createAsyncThunk('game/fetchQuestions', async (arg, { getState }) => {
  const state = getState();
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${state.game.numberOfQ}&difficulty=${state.game.difficulty}&token=${state.setup.token}`
  );
  const { results } = await response.json();
  return results;
});

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = state.questions.concat(action.payload);
        state.status = 'succeeded';
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default gameSlice.reducer;

export const selectEveryQuestion = (state) => state.game.questions;
