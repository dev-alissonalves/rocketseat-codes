/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let sum, sub, mult, div, rest;

let numberOne = Number(prompt("Informe o primeiro número: "))
let numberTwo = Number(prompt("Informe o segundo número: "))

sum = (numberOne + numberTwo)
sub = (numberOne - numberTwo)
mult = (numberOne * numberTwo)
div = (numberOne / numberTwo)
rest = (numberOne % numberTwo)

alert("A soma entre números é: " + sum)
alert("A subtração entre os números é: " + sub)
alert("A multiplicação entre os números é: " + mult)
alert("A divisão entre os números é: " + div)
alert("O resto da divisão entre os números é: " + rest)
alert("OPERAÇÕES REALIZADAS COM SUCESSO!")