import saveToLocalStorage from "./saveDataToLocal.js";
import renderBookList from "./renderBookList.js";

function deleteBook(index) {
  let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];
  let confirmDelete = window.confirm(
    "Are you sure you want to delete this book?"
  );

  if (confirmDelete) {
    bookList.splice(index, 1);
    saveToLocalStorage(bookList);
    renderBookList();
  }
}

export default deleteBook;
