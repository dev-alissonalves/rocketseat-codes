/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

alert("==! JOGO DA ADIVINHAÇÃO !==\nAdvinhe o número que estou pensando? Está entre 0 e 10...")

let bet = Number(prompt("Qual o seu palpite? "))
const numberRandom = Math.round(Math.random()*10)
let trials = 1

while(bet != numberRandom){
    bet = prompt("Erro! - tente novamente: ")
    trials++
}

if (trials == 1){
    alert("Parabéns! O número que eu pensei foi o "+ numberRandom + "\nVocê advinhou em [" + trials + "] tentativa.")
}else{
    alert("Parabéns! O número que eu pensei foi o "+ numberRandom + "\nVocê advinhou em [" + trials + "] tentativas.")
}
