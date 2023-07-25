const access_key = "-ro7zEYlBBAPYBhdhv46Z3XTs9ujvgJr7U6NZlYdPjc";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search_value");
const searchResults = document.querySelector(".search_results");
const showMore = document.getElementById("show_more");

let inputData = "";
let page = 1;

async function generate(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access_key}`;

    const response = await fetch(url);
    const data = await response.json();
    
    const results = data.results;

    if(page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search_result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt - result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    } );
    page++;
    if(page>1){
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    page=1;
    generate();
});

showMore.addEventListener("click",() =>{
    generate();
});