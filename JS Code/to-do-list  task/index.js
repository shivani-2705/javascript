const container = document.querySelector(".container");
const form =document.querySelector("form");
const title = document.getElementById("title");
const description = document.getElementById("description");

const tasks = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
: [];
showAllTask();

function showAllTask () {

tasks.forEach((value,index)=> {
    const div = document.createElement("div");
    div.setAttribute("class","task");
    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const doneBtn = document.createElement("button");
    doneBtn.setAttribute("class","doneBtn")
    doneBtn.innerText ="Done";
   
    doneBtn.addEventListener("click", ()=> {
        p.setAttribute("id","done");
    })

    div.append(doneBtn)


    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class","removeBtn")
    removeBtn.innerText ="Remove";

    removeBtn.addEventListener("click", ()=>{
       removeTask();
       tasks.splice(index,1);
       localStorage.setItem("tasks",JSON.stringify(tasks));
       showAllTask();

    })
    div.append(removeBtn)

    container.append(div)

});

}



function removeTask (){
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove()
    })
}



form.addEventListener("submit",(e) =>{
    e.preventDefault();
    removeTask();
    tasks.push({
        title : title.value,
        description : description.value,
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTask();

});
