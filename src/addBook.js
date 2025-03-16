import generateBookList from "./generateBookListObj.js";
import generateId from "./generateUnixId.js";
import saveToLocalStorage from "./saveDataToLocal.js";
import renderBookList from "./renderBookList.js";

function addBook(dataBookList) {
    const textBookTitle = document.getElementById("bookFormTitle").value;
    const textBookAuthor = document.getElementById("bookFormAuthor").value;
    const textBookYear = document.getElementById("bookFormYear").value;
    // const textBookIsComplete = document.getElementById("bookFormIsComplete").checked;

    const generateBookId = generateId();
    const bookListObj = generateBookList(generateBookId, textBookTitle, textBookAuthor, textBookYear, false);
    dataBookList.push(bookListObj);
    saveToLocalStorage(dataBookList);
    renderBookList();
}

export default addBook;
