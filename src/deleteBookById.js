import saveToLocalStorage from "./saveDataToLocal.js";
import renderBookList from "./renderBookList.js";

function deleteBook(index) {
    let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];
    bookList.splice(index, 1);
    saveToLocalStorage(bookList);
    renderBookList();
}

export default deleteBook;