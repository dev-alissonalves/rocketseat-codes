import { Controls } from "./controls.js"
import { Timer } from "./timer.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timerTimeout;

const timer = Timer(
    {
        minutesDisplay,
        secondsDisplay,
        timerTimeout,
        resetControls: controls.reset,
    }
);

const controls = Controls(
    {
        buttonStop, 
        buttonSet, 
        buttonPlay, 
        buttonPause
    }
);

buttonPlay.addEventListener("click", function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener("click", function(){
    controls.pause()
    clearTimeout(timerTimeout)
})

buttonStop.addEventListener("click", function(){
    controls.reset()
    timer.reset()
}) 

buttonSet.addEventListener("click", function(){
    let newMinutes = controls.getMinutes()

    if (!minutes) {
        timer.reset()
        return 
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
})

buttonSoundOn.addEventListener("click", function(){
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
})

buttonSoundOff.addEventListener("click", function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
})

