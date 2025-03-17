// Do your work here...
import addBook from "./src/addBook.js";
import generateId from "./src/generateUnixId.js";
import saveToLocalStorage from "./src/saveDataToLocal.js";
import renderBookList from "./src/renderBookList.js";
import deleteBook from "./src/deleteBookById.js";
import editBook from "./src/editBookById.js";
import { moveBookToComplete, moveBookToIncomplete } from "./src/moveBookById.js";

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


window.moveBookToComplete = moveBookToComplete;
window.moveBookToIncomplete = moveBookToIncomplete;
window.deleteBook = deleteBook;
window.editBook = editBook;

document.addEventListener("DOMContentLoaded", renderBookList )

// document.getElementById("bookFormSubmit").addEventListener("click", (event) => {
//     event.preventDefault();

//     const bookTitle = document.getElementById("bookFormTitle").value;
//     const bookAuthor = document.getElementById("bookFormAuthor").value;
//     const bookYear = document.getElementById("bookFormYear").value;
//     const bookIsComplete = document.getElementById("bookFormIsComplete").checked;

//     if(editBookId === null) {
//         dataBookList.push({
//             id: generateId(),
//             title: bookTitle,
//             author: bookAuthor,
//             year: bookYear,
//             isComplete: bookIsComplete,
//         });
//     } else {
//         const indexBookList = dataBookList.findIndex((book) => book.id === editBookId);
//         if(indexBookList !== -1) {
//             dataBookList[indexBookList] = {
//                 id: editBookId,
//                 title: bookTitle,
//                 author: bookAuthor,
//                 year: bookYear,
//                 isComplete: bookIsComplete,
//             };
//             editBookId = null;
//         }
//     }
//     console.log(dataBookList);
//     saveToLocalStorage(dataBookList);
// })
