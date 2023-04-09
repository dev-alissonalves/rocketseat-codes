// clearInterval irá para de rodar o set interval
// depois de x milissegundos

const timeOut = 1000
const checking = () => console.log("checking!")
setInterval(checking, timeOut)
setTimeout(() => clearInterval(interval), 3500)