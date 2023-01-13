const numberRandom = Math.round(Math.random()*10)
let trials = 1

function handleClick(event){
    event.preventDefault();
    const inputTrial = Number((document.querySelector("#inputNumber")).value)
    if(inputTrial == numberRandom) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector("#match").innerText = `Acertou em ${trials} vezes`
    }else{
        alert("[ERROU]")
    }

    trials++;
}