import { configureStore } from '@reduxjs/toolkit';
import productReducer from './pages/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
