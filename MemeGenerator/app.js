const memeBtn = document.querySelector(".meme-generator-btn");
const memeTitle = document.querySelector(".meme-text");
const memeAuthor = document.querySelector(".meme-author");
const memeImg = document.querySelector("meme-pic");


const updateDetails(url, title, author)=>{
    memeImg.setAttribute("src", rul);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=author;
}
const generateMeme = () => {
  fetch("")
    .then((response) => response.json)
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

memeBtn.addEventListener("click",generateMeme);
