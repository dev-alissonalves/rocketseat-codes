const imgCookieOpened = document.querySelector("#imgCookieClosed");
const btnOtherCookie = document.querySelector("#btnOtherCookie");
const Message = document.querySelector("#Message")
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const footerAuthor = document.querySelector("footer");
let numberRandom = Math.round(Math.random()*5);

//Events
imgCookieOpened.addEventListener("click", messageCookie)
btnOtherCookie.addEventListener("click", otherMessage)

//Functions
function messageCookie(){
    randomMessage();
    toggleScreen();
    numberRandom = Math.round(Math.random()*5);
}
function otherMessage(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    footerAuthor.classList.toggle("hide")
}
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    footerAuthor.classList.toggle("hide")
}
function randomMessage(){
    switch(numberRandom){
        case 1:
            Message.innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`
            break;
        case 2:
            Message.innerText = `Procure acender uma vela em vez de amaldiçoar a escuridão.`
            break;
        case 3:
            Message.innerText = `Deus está em toda a parte ao mesmo tempo, em redor de você, dentro de você!`
            break;
        case 4:
            Message.innerText = `É em meio a dificuldade que se encontra a oportunidade.`
            break;
        case 5:
            Message.innerText = `Que os dias bons se tornem rotina, e os ruins se tornem raros.`
            break;
    }
}