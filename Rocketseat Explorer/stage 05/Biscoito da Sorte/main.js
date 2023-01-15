const imgCookieOpened = document.querySelector("#imgCookie");
const btnOtherCookie = document.querySelector("#btnOtherCookie");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");


//Events
imgCookieOpened.addEventListener("click", messageCookie)
btnOtherCookie.addEventListener("click", otherMessage)

//Functions
function messageCookie(){
    toggleScreen();
}
function otherMessage(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}