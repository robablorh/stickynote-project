import { configureStore } from "@reduxjs/toolkit";
import  stickySlice  from "./slice";

export const store = configureStore({
  reducer: {
    tasks: stickySlice,
  },
});
