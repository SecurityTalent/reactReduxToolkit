import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from "../features/bookSlide";


function BookList({onHandelEdit}) {
  const books = useSelector((state) => state.booksR.books);
  const dispatch = useDispatch();

  const handelClick = (id) => {
    dispatch(deleteBook(id));
    console.log(id)
  };
  const handelEdit = (book) => {
    onHandelEdit(book);
  };

  const handelonCancelEdit = (book) => {
    onHandelEdit(null);
  };

  
  return (
    <>
      <h1>List of books</h1>
      {books && books.length > 0 ? (
        books.map((book) => (
          <ul key={book.id}>
            <li>
              {book.title} - {book.author} ${book.price} {book.quantity} &nbsp;
              <button onClick={() => handelClick(book.id)}>Delete</button>
              <button onClick={() => handelEdit(book)}>Edit Book</button>
            </li>
          </ul>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </>
  );
}

export default BookList;
