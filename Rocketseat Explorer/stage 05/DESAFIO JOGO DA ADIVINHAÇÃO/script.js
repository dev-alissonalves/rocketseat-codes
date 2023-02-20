// Variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTrial = document.querySelector("#btnTrial");
const btnPlayAgain = document.querySelector("#btnPlayAgain");
let numberRandom = Math.round(Math.random()*10);
let trials = 0;


//Events
btnTrial.addEventListener("click", handleTryClick);
btnPlayAgain.addEventListener("click", handleTryAgain);

//function for keyboard navigation
document.addEventListener("keydown", function(e){
    if(e.key == "Enter" && screen1.classList.contains('hide')){
        handleTryAgain();
    }
})
//Functions of CallBack
function handleTryClick(event){
    event.preventDefault();
    trials++;
    const inputTrial = (document.querySelector("#inputNumber"))
    if(Number(inputTrial.value) == numberRandom) {
        toggleScreen();
        screen2.querySelector("#match").innerText = `Acertou em ${trials} vezes!`
    }
    inputTrial.value = "";
}
function handleTryAgain(){
    toggleScreen();
    trials = 0;
    numberRandom = Math.round(Math.random()*10);
}
//Function for change screen
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}