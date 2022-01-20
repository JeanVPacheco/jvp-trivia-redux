import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game/gameSlice';
import setupReducer from './game/setupSlice';
import rankingReducer from './game/rankingSlice';

export default configureStore({
  reducer: {
    setup: setupReducer,
    game: gameReducer,
    ranking: rankingReducer
  }
});
