const daysItem = document.querySelector(".days");
const hoursItem = document.querySelector(".hours");
const minutesItem = document.querySelector(".minutes");
const secondsItem = document.querySelector(".seconds");
const counter = document.querySelector(".counter");
const heading = document.querySelector("h1");



const seconds =1000,
 minutes=60*seconds, 
 hours =60*minutes , 
 days = 24*hours;

 const timerFunction =() => {

let now = new Date();
let dd = String(now.getDate()).padStart(2,"0"),
mm = String(now.getMonth()+1).padStart(2,"0");
yyyy = now.getFullYear();


 let targetDay= String(prompt("Enter Day")).padStart(2,0);
 let targetMonth= String(prompt("Enter Month")).padStart(2,0);

 if(targetDay> 31){
    targetDay =(targetDay%31);
    targetMonth = Number(targetMonth)+1;
 }

 if(targetMonth> 12){
    targetMonth =(targetMonth%12);
    yyyy = Number(yyyy)+1;
 }

 
 now =`${yyyy}/${mm}/${dd}`
 let targetDate = `${yyyy}/${targetMonth}/${targetDay}`

 if(now > targetDate){
     targetDate = `${yyyy+1}/${targetMonth}/${targetDay}`
 }

 


const interval = setInterval(() => {

    const today = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target-today;

    
     const daysLeft =Math.floor(difference/days);
     console.log(daysLeft);
     const hoursLeft = Math.floor((difference % days)/ hours);
     const minutesLeft = Math.floor((difference % hours)/ minutes);
     const secondsLeft = Math.floor((difference % minutes)/ seconds);
     
     daysItem.innerText =daysLeft;
     hoursItem.innerText =hoursLeft;
     minutesItem.innerText =minutesLeft;
     secondsItem.innerText =secondsLeft;

     if (difference < 0){
        counter.style.display ="none";
        heading.innerText ="TIME'S UP"
        clearInterval(interval);
     }     
    } ,0);  
 };

 timerFunction();
