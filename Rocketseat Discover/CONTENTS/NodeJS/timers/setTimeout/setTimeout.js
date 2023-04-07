// setTimeout irá rodar uma função de x milissegundos

const timeOut = 3000
const finished = () => console.log("Done!")

setTimeout(finished, timeOut)
console.log("Mostrar!")