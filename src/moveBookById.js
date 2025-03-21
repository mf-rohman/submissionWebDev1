import saveToLocalStorage from "./saveDataToLocal.js";
import renderBookList from "./renderBookList.js";

export function moveBookToComplete(index) {
  let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];

  bookList[index].isComplete = true;
  saveToLocalStorage(bookList);
  renderBookList();
}

export function moveBookToIncomplete(index) {
  let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];

  bookList[index].isComplete = false;
  saveToLocalStorage(bookList);
  renderBookList();
}
