const container = document.querySelector(".time");
const startBtn= document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let sec =0 ,
 min =0 ,
hr=0,
watchId; 

  const startWatch = () =>{
    watchId= setInterval(() => {
        if(sec<59){
            sec++;
        }
        else if(min>=59){
            hr++;
            min=0;
        }else{
            sec=0;
            min++;

        }
        
        let screenHr =String(hr).padStart(2,"0");
        let screenMin =String(min).padStart(2,"0");
        let screenSec =String(sec).padStart(2,"0");
        

        let stopWatch =`${screenHr} : ${screenMin} : ${screenSec}`;

        container.innerText =stopWatch;
        

        
      },1000);
    
  };

  const stopWatch = () =>{
    clearInterval(watchId);
  };


  const resetWatch = () =>{
    
    sec =0;
    min =0;
     hr=0;
     startWatch();
  };

 

  

