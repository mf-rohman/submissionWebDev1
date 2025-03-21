function handlerCheckBox() {
  window.addEventListener("load", () => {
    const checkBox = document.getElementById("bookFormIsComplete");
    const buttonFormSubmit = document.getElementById("bookFormSubmit");

    if (checkBox.checked) {
      console.log("checked");
    }
    checkBox.addEventListener("change", () => {
      buttonFormSubmit.innerHTML = `Masukan Buku ke Rak <span>${
        checkBox.checked ? "Selesai Dibaca" : "Belum Selesai Dibaca"
      }</span>`;
    });
  });
}

export default handlerCheckBox;
