import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: [
    { username: 'aogador um', score: 30 },
    { username: 'aogador dois', score: 30 },
    { username: 'dogador três', score: 35 },
    { username: 'eogador quatro', score: 40 },
    { username: 'fogador cinco', score: 10 }
  ]
};

export const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    addToRanking(state, action) {
      const { username, score } = action.payload;
      const player = { username, score };

      state.players.push(player);
      state.players = state.players.sort((a, b) => b.score - a.score);
      // colocar em ordem de score, depois ordem alfabetica
      // .sort((a, b) => b.username - a.username);

      if (state.players.length > 4) {
        state.players.splice(5, 1);
      }
    }
  }
});

export const { addToRanking } = rankingSlice.actions;

export default rankingSlice.reducer;

export const selectTopPlayers = (state) => state.ranking.players;
