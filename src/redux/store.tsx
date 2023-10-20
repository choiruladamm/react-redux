import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlice";

export const store = configureStore({
  reducer: counterReducer,
});
