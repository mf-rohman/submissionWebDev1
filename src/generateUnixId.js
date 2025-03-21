function generateId() {
  let unixStringId = Math.random().toString(36).substr(2, 6);
  let currentTime = new Date().getTime();
  let onlyLocalDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
  });
  let timeStampId = onlyLocalDate + currentTime;
  return unixStringId + timeStampId;
}

export default generateId;
