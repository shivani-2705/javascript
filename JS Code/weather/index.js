const API_KEY ="66b36b9664299a67e3e08643b023078c";
const url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".input");
const searchBtn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");


async function fetchWeather(location){
    const res= await fetch(`${url}${location}&apiKey=${API_KEY}`);

    if(res.status == 404){
        document.querySelector(".error").style.display =" block";
        document.querySelector(".weather").style.display =" none";
    }else{
        const data= await res.json();

        document.querySelector(".loc").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    
        if(data.weather[0].main=="Clouds"){
           weatherIcon.src="./assets/images/clouds.png"
        }else if(data.weather[0].main=="Clear"){
            weatherIcon.src="./assets/images/clear.png"
         }else if(data.weather[0].main=="Rain"){
            weatherIcon.src="./assets/images/rain.png"
         }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="./assets/images/drizzle.png"
         }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="./assets/images/mist.png"
         }
    }

    }
   

searchBtn.addEventListener("click", ()=>{
    fetchWeather(searchBox.value);

});

