import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice.js';
import newProductReducer from './newProductsSlice';

export default configureStore({
    reducer: {
      products: productsReducer,
      newProducts: newProductReducer,
    },
  });