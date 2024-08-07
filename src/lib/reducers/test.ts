import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 1
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setCountPlus: (state) => {
      state.count += 1;
    }
  }
});
export const { setCountPlus } = testSlice.actions;
export const testReducer = testSlice.reducer;
