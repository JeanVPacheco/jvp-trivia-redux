import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { token: '' };

export const fetchToken = createAsyncThunk('setup/fetchToken', async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  const { token } = await data;
  return token;
});

const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
    });
  }
});

export default setupSlice.reducer;
