/*
    ESCRITA DE TEXTO EM CONJUNTO COM VARIÁVEIS

    CONCATENAÇÃO 
        *  Utilizamos o operador + para unir textos e variáveis

    EXEMPLO ABAIXO:
*/

let estudante = 'Álisson Alves'
let idadeEstudante = 26

//Utilizando concatenação
console.log('O nome do estudante é ' + estudante + " e ele possui " + idadeEstudante + ' anos de idade.')


/*
    INTERPOLAÇÃO 
        *  Utilizamos template literals/template ${} strings para unir textos e variáveis

    EXEMPLO ABAIXO:
*/

let marcaVeiculo = 'Nissan'
let valorCarro = 65.000

console.log(`O veículo Frontier 4x4 é da marca ${marcaVeiculo} e custa R$ ${valorCarro.toFixed(3)} reais.`)


