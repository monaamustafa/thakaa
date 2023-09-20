import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import languageReducer from './slices/langSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
  },
});
