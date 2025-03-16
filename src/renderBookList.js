function renderBookList() {
    let bookList = JSON.parse(localStorage.getItem("bookForm")) || [];

    const bookListContainer = document.getElementById('incompleteBookList');
    bookListContainer.innerHTML = '';

    if (bookList.length === 0) {
        bookListContainer.innerHTML = `<p>Tidak ada buku yang belum selesai dibaca.</p>`;
        return;
    }
    bookList.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.setAttribute('data-bookid', book.id);
        bookElement.setAttribute('data-testid', 'bookItem');
        bookElement.innerHTML = `
            <h3 data-testid="bookItemTitle">Title: ${book.title}</h3>
            <p data-testid="bookItemAuthor">Author: ${book.author}</p>
            <p data-testid="bookItemYear">Publish Year: ${book.year}</p>
            <div>
                <button data-testid="bookItemIsCompleteButton">Selesai dibaca</button>
                <button data-testid="bookItemDeleteButton">Hapus Buku</button>
                <button data-testid="bookItemEditButton">Edit Buku</button>
            </div>
        `;
        bookListContainer.appendChild(bookElement);
    });

}

export default renderBookList;