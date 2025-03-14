function saveToLocalStorage(data) {
    localStorage.setItem("bookForm", JSON.stringify(data));
}

export default saveToLocalStorage;