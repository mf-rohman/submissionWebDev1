import saveToLocalStorage from "./saveDataToLocal.js";
import renderBookList from "./renderBookList.js";

function editBook(index) {
    let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];

    const newTitle = prompt("Masukkan judul baru", bookList[index].title);
    const newAuthor = prompt("Masukkan penulis baru", bookList[index].author);
    const newYear = prompt("Masukkan tahun baru", bookList[index].year);

    if (newTitle && newAuthor && newYear) {
        bookList[index].title = newTitle;
        bookList[index].author = newAuthor;
        bookList[index].year = newYear;
    }

    saveToLocalStorage(bookList);
    renderBookList();
}

export default editBook;