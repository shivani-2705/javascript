const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBackgroundColor =()=> {
console.log(zodiac.value);

switch (zodiac.value) {
    case "aries":
        body.style.backgroundColor="green";
        break;

        case "taurus":
        body.style.backgroundColor="olive";
        break;

        case "gemini":
        body.style.backgroundColor="cyan";
        break;

        case "cancer":
        body.style.backgroundColor="teal";
        break;

        case "leo":
        body.style.backgroundColor="orange";
        break;

        case "virgo":
        body.style.backgroundColor="yellow";
        break;

        case "libra":
        body.style.backgroundColor="pink";
        break;

        case "scorpio":
        body.style.backgroundColor="aqua";
        break;

        case "sagittarius":
        body.style.backgroundColor="red";
        break;

        case "capricon":
        body.style.backgroundColor="lightgreen";
        break;

        case "aquarius":
        body.style.backgroundColor="slateBlue";
        break;

        case "pisces":
        body.style.backgroundColor="violet";
        break;    

        default:
            break;
}

}