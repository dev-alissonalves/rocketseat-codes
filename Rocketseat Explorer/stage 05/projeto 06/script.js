const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

let minutes;
let seconds;

function countdown(){
    setTimeout(function(){
        seconds = Number(secondsDisplay.textContent)
        minutes = Number(minutesDisplay.textContent)
        
        if(seconds <= 0){
            seconds = 10
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds-1).padStart(2, "0")  

        if(minutes <= 0){
            buttonStop.classList.add("hide")
            buttonSet.classList.remove("hide")
            buttonPlay.classList.remove("hide")
            buttonPause.classList.add("hide")
            return
        }     
        countdown()
    }, 1000)
}

buttonPlay.addEventListener("click", function(){
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonStop.classList.remove("hide")
    buttonSet.classList.add("hide")

    countdown()
})

buttonPause.addEventListener("click", function(){
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
})

buttonStop.addEventListener("click", function(){
    buttonStop.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
})

buttonSoundOn.addEventListener("click", function(){
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
})

buttonSoundOff.addEventListener("click", function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
})

buttonSet.addEventListener("click", function(){
    minutes = prompt("Quantos minutos?")
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
})
