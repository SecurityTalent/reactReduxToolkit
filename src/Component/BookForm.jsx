import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/bookSlide";

function BookForm({ bookToEdit, onCancel }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const dispatch = useDispatch();

  // prefill form when editing
  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    } else {
      setBook({
        title: "",
        author: "",
        price: "",
        quantity: "",
      });
    }
  }, [bookToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      // update existing book
      dispatch(updateBook(book));
      onCancel(); // clear editing mode
    } else {
      // add new book
      dispatch(addBook({ ...book, id: nanoid() }));
    }

    // reset form
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
    <h1>React Redux Toolkit ADD Book List Form</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          value={book.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          required
          value={book.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          required
          value={book.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          required
          value={book.quantity}
          onChange={handleChange}
        />

        <button type="submit">
          {bookToEdit ? "Update Book" : "Add Book"}
        </button>

        {bookToEdit && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </>
  );
}

export default BookForm;
