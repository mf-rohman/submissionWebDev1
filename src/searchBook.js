import renderBookList from "./renderBookList.js";

function searchBook() {
  let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];
  const searchQuery = document
    .getElementById("searchBookTitle")
    .value.toLowerCase();

  const filteredBooks = bookList.filter((book) =>
    book.title.toLowerCase().includes(searchQuery)
  );

  if (searchQuery === "") {
    renderBookList(bookList);
    return;
  }

  if (filteredBooks.length === 0) {
    document.getElementById(
      "incompleteBookList"
    ).innerHTML = `<p>Tidak ada buku yang sesuai dengan pencarian.</p>`;
    document.getElementById(
      "completeBookList"
    ).innerHTML = `<p>Tidak ada buku yang sesuai dengan pencarian.</p>`;
    return;
  }

  renderBookList(filteredBooks);
}

export default searchBook;
