import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game/gameSlice';
import setupReducer from './game/setupSlice';

export default configureStore({
  reducer: {
    setup: setupReducer,
    game: gameReducer
  }
});
