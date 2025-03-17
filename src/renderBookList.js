import { moveBookToComplete, moveBookToIncomplete } from "./moveBookById.js";
import deleteBook from "./deleteBookById.js";
import editBook from "./editBookById.js";

function renderBookList() {
  let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];

  const incompleteBookContainer = document.getElementById("incompleteBookList");
  const completeBookContainer = document.getElementById("completeBookList");

  completeBookContainer.innerHTML = "";
  incompleteBookContainer.innerHTML = "";

  if (bookList.length === 0) {
    incompleteBookContainer.innerHTML = `<p>Tidak ada buku.</p>`;
    completeBookContainer.innerHTML = `<p>Tidak ada buku yang selesai dibaca.</p>`;
    return;
  }
  bookList.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.setAttribute("data-bookid", book.id);
    bookElement.setAttribute("data-testid", "bookItem");
    bookElement.innerHTML = `
            <h3 data-testid="bookItemTitle">Title: ${book.title}</h3>
            <p data-testid="bookItemAuthor">Author: ${book.author}</p>
            <p data-testid="bookItemYear">Publish Year: ${book.year}</p>
            <div>
            ${
              book.isComplete
                ? `<button data-testid="bookItemIsCompleteButton" onclick="moveBookToIncomplete(${index})">Belum selesai dibaca</button>`
                : `<button data-testid="bookItemIsCompleteButton" onclick="moveBookToComplete(${index})">Selesai dibaca</button>`
            }
                
                <button data-testid="bookItemDeleteButton" onclick="deleteBook(${index})">Hapus Buku</button>
                <button data-testid="bookItemEditButton" onclick="editBook(${index})">Edit Buku</button>
            </div>
        `;
    book.isComplete
      ? completeBookContainer.appendChild(bookElement)
      : incompleteBookContainer.appendChild(bookElement);
  });
}

export default renderBookList;
