import { nanoid } from "nanoid";
import React, { useState } from "react"; // <-- useState instead of useSelector

function BookForm() {
  // local state for form inputs
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // destructure correctly
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handelSubmit = (e) =>{
    e.preventDefault();
    console.log({...book, id: nanoid()})

  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="title" // <-- lowercase, must match state keys
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BookForm;
