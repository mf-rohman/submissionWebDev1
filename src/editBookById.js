import saveToLocalStorage from "./saveDataToLocal.js";
import renderBookList from "./renderBookList.js";

function editBook(bookId) {
  const bookList = JSON.parse(localStorage.getItem("bookForm")) || [];
  const indexBookList = bookList.findIndex((book) => book.id === bookId);
  if (indexBookList !== -1) {
    const book = bookList[indexBookList];

    document.getElementById("editBookId").value = bookId;
    document.getElementById("editBookTitle").value = book.title;
    document.getElementById("editBookAuthor").value = book.author;
    document.getElementById("editBookYear").value = book.year;

    document.getElementById("editBookModal").style.display = "block";
  }
}

function closeModal() {
  document.getElementById("editBookModal").style.display = "none";
}

function saveEditBook() {
  let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];
  const editBookId = document.getElementById("editBookId").value;

  const editBookTitle = document.getElementById("editBookTitle").value;
  const editBookAuthor = document.getElementById("editBookAuthor").value;
  const editBookYear = document.getElementById("editBookYear").value;

  if (editBookId && editBookTitle && editBookAuthor && editBookYear) {
    const indexBookList = bookList.findIndex((book) => book.id === editBookId);
    if (indexBookList !== -1) {
      bookList[indexBookList] = {
        id: editBookId,
        title: editBookTitle,
        author: editBookAuthor,
        year: editBookYear,
      };
    }
  }
  saveToLocalStorage(bookList);
  setTimeout(() => {
    swal({
      title: "Good job!",
      text: "Edited book successfully!",
      icon: "success",
      button: "OK",
    });
  }, 100);
  renderBookList();
  closeModal();
}

export { editBook, closeModal, saveEditBook };
