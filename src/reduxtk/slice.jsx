import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [] 
};

export const stickySlice = createSlice({
  name: "sticky",
  initialState,
  reducers: {
    createSticky: (state, {payload}) => {
            state.tasks.push(payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { createSticky } = stickySlice.actions;

export default stickySlice.reducer;
