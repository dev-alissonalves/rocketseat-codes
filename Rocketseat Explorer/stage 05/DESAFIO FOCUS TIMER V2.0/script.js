const btnPlay = document.querySelector(".play")
const btnPause = document.querySelector(".pause")
const btnAddTime = document.querySelector(".addTime")
const btnSlowDownTime = document.querySelector(".slowDownTime")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
//events

btnPlay.addEventListener('click', playPomodoro)
btnPause.addEventListener('click', pausePomodoro)
btnAddTime.addEventListener('click', addTimePomodoro)
btnSlowDownTime.addEventListener('click', slowDownTimePomodoro)

//Functions
function playPomodoro(){
    console.log("Play Clicado!")
    minutesDisplay.textContent = "TESTE"
}
function pausePomodoro(){
    console.log("Pause Clicado!")
}
function addTimePomodoro(){
    console.log("AddTime Clicado!")
}
function slowDownTimePomodoro(){
    console.log("SlowDown Clicado!")
}