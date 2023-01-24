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

function resetControls(){
    buttonStop.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
}

function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeout)
}

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
    
    timerTimeout = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)  

        //secondsDisplay.textContent = "00"
        updateTimerDisplay(minutes, 0)

        if(minutes <= 0){
            resetControls()
            return
        } 
        
        if(seconds <= 0){
            seconds = 60
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))
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
    clearTimeout(timerTimeout)
})

buttonStop.addEventListener("click", function(){
    resetControls()
    resetTimer()
})

buttonSet.addEventListener("click", function(){
    let newMinutes = prompt("Quantos minutos?")
    
    if(!newMinutes){
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})

buttonSoundOn.addEventListener("click", function(){
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
})

buttonSoundOff.addEventListener("click", function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
})

