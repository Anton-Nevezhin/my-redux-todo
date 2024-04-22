import { createSlice } from "@reduxjs/toolkit";

const initial = {
  filter: "Все",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initial,
  reducers: {
    toogleFilterAll(state, action) {
      state.filter = 'Все'
      console.log("filter: ", action.payload);
    },
    toogleFilterComplete(state, action) {
      state.filter = 'Выполненные'
      console.log("filter: ", action.payload);
    },
    toogleFilterNonComplete(state, action) {
      state.filter = 'Невыполненные'
      console.log("filter: ", action.payload);
    },
  },
});

export default filterSlice.reducer;

export const { toogleFilterAll, toogleFilterComplete, toogleFilterNonComplete } = filterSlice.actions;
