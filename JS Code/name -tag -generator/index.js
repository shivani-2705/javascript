const name = document.getElementById("name");
const tags = document.querySelector(".tags");

const nameTagGenerator = () =>{
    
    const tag =document.createElement("div");
    tag.setAttribute("class", "tag");
    tag.innerText = `Heya, I'm ${name.value} `;

    tags.append(tag);
    
}