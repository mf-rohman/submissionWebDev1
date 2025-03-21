import { moveBookToComplete, moveBookToIncomplete } from "./moveBookById.js";
import deleteBook from "./deleteBookById.js";
import { editBook, saveEditBook, closeModal } from "./editBookById.js";

function capitalizeEachWord(text) {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

function renderBookList(bookList = null) {
  // let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];
  if (!Array.isArray(bookList)) {
    bookList = JSON.parse(localStorage.getItem("bookForm")) || [];
  }

  if (!Array.isArray(bookList)) {
    console.error("Book list is not an array:", bookList);
    bookList = [];
  }

  const incompleteBookContainer = document.getElementById("incompleteBookList");
  const completeBookContainer = document.getElementById("completeBookList");

  completeBookContainer.innerHTML = "";
  incompleteBookContainer.innerHTML = "";

  if (bookList.length === 0) {
    incompleteBookContainer.innerHTML = `<p>Tidak ada buku.</p>`;
    completeBookContainer.innerHTML = ``;
    return;
  }
  bookList.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.setAttribute("data-bookid", book.id);
    bookElement.setAttribute("data-testid", "bookItem");
    bookElement.innerHTML = `
            <div class="book-details"> 
                <h3 data-testid="bookItemTitle">${capitalizeEachWord(
                  book.title
                )}</h3>
                <p><span class="label">Author</span><span class="separator">:</span> <span class="value">${
                  book.author
                }</span></p>
                <p><span class="label">Publish Year</span><span class="separator">:</span> <span class="value">${
                  book.year
                }</span></p>
            </div>
            ${
              book.isComplete
                ? `<button data-testid="bookItemIsCompleteButton" class="undo-button" onclick="moveBookToIncomplete(${index})"><i class="fa fa-refresh" aria-hidden="true"></i></button>`
                : `<button data-testid="bookItemIsCompleteButton" class="complete-button" onclick="moveBookToComplete(${index})"><i class="fas fa-check-circle"></i></button>`
            }
                
                <button data-testid="bookItemDeleteButton" class="delete-button" onclick="deleteBook(${index})"><i class="fas fa-trash"></i></button>
                <button data-testid="bookItemEditButton" class="edit-button" onclick="editBook('${
                  book.id
                }')"><i class="fas fa-edit"></i></button>
            </div>
        `;
    book.isComplete
      ? completeBookContainer.appendChild(bookElement)
      : incompleteBookContainer.appendChild(bookElement);
  });
}

export default renderBookList;
