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

//para adicionar valores aos Arrays utilizamos a função push()
animals.push('DOG')
console.log(animals)

//para remover valores aos Arrays utilizamos a função pop()
animals.pop()
console.log(animals)