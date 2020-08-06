import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    add: (state, {payload}) => state + payload
  }
});

export const { increment, decrement, add } = counterSlice.actions
export default counterSlice.reducer;

