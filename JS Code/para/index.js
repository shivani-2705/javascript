const input =document.getElementById("noOfWords");
const container = document.querySelector(".container");

const generateWords =(n)=> {
    let text =" ";
    const letters ="abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<n; i++){
        text+= letters[(Math.random()*26).toFixed(0)];
    }
    return text;

}


let numOfWords ;
const generatePara =()=> {
    numOfWords = Number(input.value);

 const para = document.createElement("p");
 let data= "";
 for(let i=0;i<numOfWords;i++){
    const randomNum = (Math.random()*10).toFixed(0);
 
 data+= generateWords(randomNum);

 }
 data+= " ";
 para.innerText =data;

 para.setAttribute("class","paras");

 container.append(para)


};

