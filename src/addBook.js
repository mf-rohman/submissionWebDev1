import generateBookList from "./generateBookListObj.js";
import generateId from "./generateUnixId.js";
import saveToLocalStorage from "./saveDataToLocal.js";
import renderBookList from "./renderBookList.js";

function addBook(dataBookList) {
  const textBookTitle = document.getElementById("bookFormTitle").value;
  const textBookAuthor = document.getElementById("bookFormAuthor").value;
  const textBookYear = document.getElementById("bookFormYear").value;
  const bookIsComplete = document.getElementById("bookFormIsComplete").checked;

  const generateBookId = generateId();
  const bookListObj = generateBookList(
    generateBookId,
    textBookTitle,
    textBookAuthor,
    Number(textBookYear),
    bookIsComplete
  );
  dataBookList.push(bookListObj);
  saveToLocalStorage(dataBookList);
  renderBookList();
  document.getElementById("bookForm").reset();
  // this.reset();
}

export default addBook;
