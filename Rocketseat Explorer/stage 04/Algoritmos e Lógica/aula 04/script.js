/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nameStudent = prompt("Caro estudante, \nInforme seu nome: ")
let bimesterOne = Number(prompt("Primeira nota: "))
let bimesterTwo = Number(prompt("Segunda nota: "))
let bimesterThree = Number(prompt("Terceira nota: "))
let average = (bimesterOne + bimesterTwo + bimesterThree)/3

average = average.toFixed(1)

if (average >= 6.0){
    alert("Parabéns, " + nameStudent + "\nSua média final foi: " + average)
}else
{
    alert("Prezado, " + nameStudent + "!\nInfelizmente você não atingiu a nota mínima. Estude os assuntos indicados para a prova de recuperação. Não desista!")
}
