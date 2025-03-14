// Do your work here...
let dataBookList = JSON.parse(localStorage.getItem("bookForm")) || [];
let editBookId = null;
let unixNumberId = Math.random().toString(36).substr(2, 6);
let currentTime = new Date().getTime();
let onlyLocalDate = new Date().toLocaleDateString('id-ID', {weekday: 'long'}); 
let timeStampId = onlyLocalDate + currentTime;


const generateId = () => {
    return unixNumberId + timeStampId;
}
const saveToLocalStorage = () => {
    localStorage.setItem("bookForm", JSON.stringify(dataBookList));
}

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
    saveToLocalStorage();
    

})