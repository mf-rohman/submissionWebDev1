// Do your work here...
import generateId from "./src/generateUnixId.js";
import saveToLocalStorage from "./src/saveDataToLocal.js";

let dataBookList = JSON.parse(localStorage.getItem("bookForm")) || [];
let editBookId = null;

// const renderBookList = () => {
//     const booksList = 
// }

document.getElementById("bookFormSubmit").addEventListener("click", (event) => {
    event.preventDefault();

    const bookTitle = document.getElementById("bookFormTitle").value;
    const bookAuthor = document.getElementById("bookFormAuthor").value;
    const bookYear = document.getElementById("bookFormYear").value;
    const bookIsComplete = document.getElementById("bookFormIsComplete").checked;

    if(editBookId === null) {
        dataBookList.push({
            id: generateId(),
            title: bookTitle,
            author: bookAuthor,
            year: bookYear,
            isComplete: bookIsComplete,
        });
    } else {
        const indexBookList = dataBookList.findIndex((book) => book.id === editBookId);
        if(indexBookList !== -1) {
            dataBookList[indexBookList] = {
                id: editBookId,
                title: bookTitle,
                author: bookAuthor,
                year: bookYear,
                isComplete: bookIsComplete,
            };
            editBookId = null;
        }
    }
    console.log(dataBookList);
    saveToLocalStorage(dataBookList);
})