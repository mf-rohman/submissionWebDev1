// Do your work here...
import addBook from "./src/addBook.js";
import generateId from "./src/generateUnixId.js";
import saveToLocalStorage from "./src/saveDataToLocal.js";
import renderBookList from "./src/renderBookList.js";
import deleteBook from "./src/deleteBookById.js";
import { editBook, saveEditBook, closeModal } from "./src/editBookById.js";
import searchBook from "./src/searchBook.js";
import {
  moveBookToComplete,
  moveBookToIncomplete,
} from "./src/moveBookById.js";
import handlerCheckBox from "./src/handlerCheckBox.js";

let dataBookList = JSON.parse(localStorage.getItem("bookForm")) || [];

document.addEventListener("DOMContentLoaded", () => {
  renderBookList(dataBookList);
  const submitForm = document.getElementById("bookForm");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("masuk");
    addBook(dataBookList);
  });
});
handlerCheckBox();

window.moveBookToComplete = moveBookToComplete;
window.moveBookToIncomplete = moveBookToIncomplete;
window.deleteBook = deleteBook;
window.editBook = editBook;
window.searchBook = searchBook;
window.saveEditBook = saveEditBook;
window.closeModal = closeModal;
window.handlerCheckBox = handlerCheckBox;

document.addEventListener("DOMContentLoaded", renderBookList);
