import { configureStore } from '@reduxjs/toolkit';
import setupReducer from './game/setupSlice';

export default configureStore({
  reducer: {
    setup: setupReducer
  }
});
