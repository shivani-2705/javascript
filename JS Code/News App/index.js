const API_KEY ="e1bf1b0655824f799543a860e08c4465";
const url ="https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=> fetchNews("politics"));

function reload(){
    window.location.reload();
}

async function fetchNews(query){
    const res= await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data= await res.json();
    bindData(data.articles);
}

function bindData(articles){
    const cardContainer = document.getElementById("card-container");
    const template = document.getElementById("template-news-card");

    cardContainer.innerHTML =" ";

    articles.forEach((article) => {
        if(!article.urlToImage) return;

        const cardClone = template.content.cloneNode(true);
        filllData(cardClone,article);

       cardContainer.appendChild(cardClone);
        
    });

}

function filllData(cardClone, article){
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src= article.urlToImage;
    newsTitle.innerText= article.title;
    const date = new Date(article.publishedAt).toLocaleString("en-us", {
        timeZone: "Asia/Jakarta"
    });
    newsSource.innerText =`${article.source.name}.${date}`;
    newsDesc.innerText = article.description;

    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url, "_blank");
    })


}

let selectedItem= null;
function itemClick(id){
    fetchNews(id);
    const navItem = document.getElementById(id);
    selectedItem?.classList.remove('active');
    selectedItem = navItem;
    selectedItem.classList.add('active')
    

}

const searchInput = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", ()=>{
    const query =searchInput.value;
    if(!query) return;
    fetchNews(query);
    selectedItem?.classList.remove('active');
    selectedItem = null;
})
