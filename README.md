# 📚 React Redux Toolkit – Book List Form App

A simple React + Redux Toolkit app for managing a list of books.  
It demonstrates how to add, edit, and delete books using Redux Toolkit for state management.


## Project Structure
```js
react-redux-booklist/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ components/
│   │   ├─ BookForm.js        
│   │   └─ BookList.js        
│   │
│   ├─ redux/
│   │   ├─ store.js           
│   │   └─ booksSlice.js      
│   │
│   ├─ App.js                
│   └─ index.js              
│
├─ package.json
└─ README.md
```

## ✨ Features

- ➕ **Add new books** (Title, Author, Price, Quantity)
- ✏️ **Edit existing books** directly in the form
- 🗑️ **Delete books** from the list
- 🖥️ **Clean UI** with styled form and list
- ⚛️ **Redux Toolkit** for simplified state management



## 📝 Form Fields

| Field      | Description                    |
|------------|--------------------------------|
| **Title**  | Book name/title                |
| **Author** | Author of the book             |
| **Price**  | Price of the book (e.g. 9.99)  |
| **Quantity** | Number of copies available   |



## 🖼️ UI Preview
![Book List App Screenshot](https://raw.githubusercontent.com/SecurityTalent/reactReduxToolkit/refs/heads/main/Screenshot.png)

## Usage
To run this project, install the dependencies and start the development server:

```bash
npm install
npm start
```
Open your browser and navigate to:

```js
http://localhost:3000
```

## 📝 License

This project is licensed under the [MIT License](LICENSE).