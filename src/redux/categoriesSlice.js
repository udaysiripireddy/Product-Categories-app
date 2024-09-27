import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch categories and their products
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    // Structure the data into categories if needed; here, we assume all products belong to one category
    const categoryData = [{
      id: 1,
      category: 'All Products',
      products: data.products // Assuming data.products is an array of product objects
    }];

    return categoryData;
  } catch (error) {
    return rejectWithValue('Failed to load categories or products.');
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new fetch attempt
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload; // Get specific error from thunk
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;
