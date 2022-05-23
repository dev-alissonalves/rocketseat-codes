/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/


let numberOne = Number(prompt("Digite o primeiro número: "))
let numberTwo = Number(prompt("Digite o segundo número: "))
let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let restDivision = numberOne % numberTwo;
let evenOrOddNumber;
let equalsNumbers = false;

if (sum % 2 == 0){
    evenOrOddNumber = "PAR!"
}else{
    evenOrOddNumber = "ÍMPAR!"
}

if (numberOne === numberTwo){
    equalsNumbers = true
}

alert(`
    SOMA = ${sum}
    SUBTRAÇÃO = ${sub}
    MULTIPLICAÇÃO = ${mult}
    DIVISÃO = ${div.toFixed(2)}
    RESTO = ${restDivision}
    A SOMA RESULTA EM UM NÚMERO = ${evenOrOddNumber}
    NÚMEROS IGUAIS? ${equalsNumbers}
`)