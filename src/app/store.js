import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/bookSlide";

export const store = configureStore({
  reducer: {
    booksR: booksReducer,
  },
});

export default store;