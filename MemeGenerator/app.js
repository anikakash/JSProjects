const memeBtn = document.querySelector(" .meme-generator-btn");
const memeTitle = document.querySelector(" .meme-text");
const memeAuthor = document.querySelector(" .meme-author");
const memeImg = document.querySelector(" img");

const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Created By: ${author}`;
};
const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

memeBtn.addEventListener("click", generateMeme);

memeBtn();