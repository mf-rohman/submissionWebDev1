function saveToLocalStorage(dataBookList) {
  localStorage.setItem("bookForm", JSON.stringify(dataBookList));
}

export default saveToLocalStorage;
