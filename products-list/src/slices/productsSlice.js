import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const productAdapter = createEntityAdapter();

const initialState = productAdapter.getInitialState();

export const fetchInitialData = createAsyncThunk(
  'rates/fetchAll',
  async () => {
    const  { data }  = await axios.get(`https://fakestoreapi.com/products/`);
    return data;
  }, 
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
      state.loading = 'loading';
    })
      .addCase(fetchInitialData.fulfilled, productAdapter.setMany)
      
  },
});

export const { actions } = productsSlice;
export const selectors = productAdapter.getSelectors((state) => state.products);
export default productsSlice.reducer;