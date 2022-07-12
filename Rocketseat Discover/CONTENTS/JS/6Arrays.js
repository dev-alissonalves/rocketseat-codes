/*
    ARRAYS

        * Arrays em JavaScript são usados para armazenar vários valores em uma única variável.

        * Um Array é uma variável especial, que pode conter mais de um valor por vez.

    EXEMPLO ABAIXO:
*/

const animals = 
[
    'LION',
    'MONKEY',
    'CAT'
]

console.log(animals) // Para imprimir todos os elementos dentro do Array
console.log(animals[0]) // Para imprimir elementos individuais utilizamos o índice como referência

//para adicionar valores ao final do Arrays utilizamos a função push()
animals.push('DOG')
console.log(animals)

//para adicionar valores no início do Arrays utilizamos a função unshift()
animals.unshift('PAPAGAIO')
console.log(animals)

//para remover valores do final do Arrays utilizamos a função pop()
animals.pop()
console.log(animals)

//para remover valores do início do Array utilizamos a função shift()
animals.shift()
console.log(animals)

//para exibir somente alguns elemetos do Array utilizamos a função slice()
console.log(animals.slice(1, 3)) //Ele vai exibir o elemento 1 e 2 do array

//para remover elementos em qualquer local do Array utilizamos a função splice()
console.log(animals.splice(1, 2)) //Primeiro argumento é a posição e o segundo a quantidade de elementos que quero remover a partir daquela posição

//Para buscar elementos em um array 
let pos = animals.indexOf('LION')
