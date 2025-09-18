import { useState } from "react";
import "./App.css";
import BookForm from "./Component/BookForm";
import BookList from "./Component/BookList";

function App() {
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleCancel = () => {
    setBookToEdit(null);
  };

  return (
    <>
      <BookForm bookToEdit={bookToEdit} onCancel={handleCancel} />
      <BookList onHandelEdit={handleEdit} />
    </>
  );
}

export default App;
