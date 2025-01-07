console.log("hello world!")


//ACCESS ALL BUTTONS FROM HTML

const pauseBtnElement = document.getElementById("stopBtn")
const playBtnElement = document.getElementById("playBtn")
const resetBtnElement = document.getElementById("resetBtn")

//THE TIMER

let [hour,minutes,seconds] = [0,0,0]

// THE TIMER FUNCTION 

const timerFunc = ()=>{
    seconds++
    if(seconds == 60){
        seconds = 0
        minutes++
    }
    if(minutes == 60){
        minutes = 0
        hour++
    }
setValue()

    console.log([hour,minutes,seconds])
}

// START THE TIMER 

const startTimer = () =>{
   intervalId = setInterval(timerFunc, 1000)
  
}

// PAUSE THE TIMER 

const pauseTimer = () =>{
    clearInterval(intervalId)
  setValue()

    console.log("timer paused")
}
// RESET THE TIMER

const resetTimer = () =>{
    [hour,minutes,seconds] = [0,0,0]
    clearInterval(intervalId)
  setValue()

}



//CLICK THE BUTTON TO CALL THE FUNCTION

playBtnElement.addEventListener("click",startTimer)

pauseBtnElement.addEventListener("click",pauseTimer)

resetBtnElement.addEventListener("click", resetTimer)


//ACCESS TIME VALUES THE HTML

let hourElement = document.getElementById("hour")
let minuteElement = document.getElementById("minute")
let secondsElement = document.getElementById("seconds")

// SET THE VALUES TO THE HTML ELEMENTS 

function setValue(){
    hourElement.innerText =(hour <= 9)? `0${hour}`: hour
    minuteElement.innerText= (minutes <= 9) ? `0${minutes}`: minutes
    secondsElement.innerText=(seconds <= 9) ? `0${seconds}`: seconds
}



    
