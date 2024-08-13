import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './features/product/productSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        api: apiReducer,
    },
  })
}