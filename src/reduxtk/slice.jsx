import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tasks: [],
};

export const stickySlice = createSlice({
  name: "sticky",
  initialState,
  reducers: {
    createSticky: (state, { payload }) => {
      state.tasks.push(payload)
    },
    editSticky: (state, {payload}) => {
      const {title, date, description, image} = payload
      const toupdate = state.tasks.find(item => item.id === payload.id)
      if(toupdate){
        toupdate.title = title
        toupdate.date = date
        toupdate.description = description
        toupdate.image = image
      }

    },
    deletesticky: (state, {payload}) => {
      state.tasks = state.tasks.filter( task=> task.id !== payload)
    }

  },
});

// Action creators are generated for each case reducer function
export const { createSticky, editSticky, deletesticky} = stickySlice.actions;

export default stickySlice.reducer;
