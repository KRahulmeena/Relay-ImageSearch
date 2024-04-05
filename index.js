const access_key = "pFGaeimOGEEBb4PaPyk1iRGmxyFk6NNUDhwYbUCHLdc";
const searchBox = document.getElementById("Search-box");
const imgSearch = document.getElementById("search-img");
const moreImg = document.getElementById("More-img");
const searchForm = document.getElementById("search-form");
const imgBox = document.getElementById("image-box");
let keyword = "";
let page = 1;
// https://api.unsplash.com/search/photos?page=1&query=office&client_id=pFGaeimOGEEBb4PaPyk1iRGmxyFk6NNUDhwYbUCHLdc

// window.location.reload();
async function searchImg() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data)
    const results = data.results;
    

    results.map((result)=> {
        
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"

        imageLink.appendChild(image);
        imgBox.appendChild(imageLink);
    })
}


searchForm.addEventListener("submit", (e)=>{
    moreImg.style.display = "inline-block"
    e.preventDefault();
    page=1;
    searchImg();
})

moreImg.addEventListener("click", (e)=> {
    page++;
    searchImg();
})


