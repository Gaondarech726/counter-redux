import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  test: true,
  x: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultState,

  reducers: {
    plus: (state, action) => {
      state.counter = state.counter + 1;
    },
    minus: (state, action) => {
      state.counter = state.counter - 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { plus, minus } = counterSlice.actions;
