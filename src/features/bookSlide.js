import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 9.99,
      quantity: 5,
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 9.99,
      quantity: 5,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 9.99,
      quantity: 5,
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
    }

  },
});

export const {deleteBook } = bookSlice.actions;
export default bookSlice.reducer;



