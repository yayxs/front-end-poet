let dom = document.getElementById("file_id");
dom.addEventListener("change", (e) => {
  console.log(e.target.files);
  let files = e.target.files,
    i = 0,
    len = files.length;

  while (i < len) {
    console.log(files[i]);
    i++;
  }
});
