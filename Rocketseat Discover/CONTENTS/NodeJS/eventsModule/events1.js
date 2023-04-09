// Realizando a importação dos módulos necessários require
const { EventEmitter } = require("events")
const evt = new EventEmitter()

// Ouvindo eventos com ON - Ouve todos os disparos, se tiver 3 ele exibirá 3 vezes
evt.on('teste', (message) => {
    console.log(`Eu ouvi você ${message}`)
})

// Ouvindo eventos com ONCE - Ouve apenas uma vez, mesmo que tenha outros disparos, se tiver 3 ele exibirá apenas o que vier primeiro
evt.once('teste', (message) => {
    console.log(`Eu ouvi você ${message}`)
})

// Disparando eventos
evt.emit('teste', "Álisson")
evt.emit('teste', "João")