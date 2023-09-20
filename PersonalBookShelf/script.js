const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault(); // prevent default behaviour of form submit
  if (title.value == "" || author.value == "" || year.value == "") {
    alert("Please fill all the fields");
  } else {
    const newRow = document.createElement("section");

    // create new title
    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // create new author
    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = title.value;
    newRow.appendChild(newAuthor);

    // create new year
    const newYear = document.createElement("div");
    newYear.innerHTML = title.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }
});
