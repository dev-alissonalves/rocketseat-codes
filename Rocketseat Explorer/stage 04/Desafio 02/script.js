/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

const students = [
    {
        name: "Álisson Alves",
        bimesterOne: 7.0,
        bimesterTwo: 7.5,
    },
    {
        name: "Cristovão Colombo",
        bimesterOne: 5.0,
        bimesterTwo: 5.5,
    },
    {
        name: "Jonhson Kimberly",
        bimesterOne: 7.0,
        bimesterTwo: 9.5,
    },
    {
        name: "Stuart Jackson",
        bimesterOne: 2.0,
        bimesterTwo: 8.5,
    },
    {
        name: "Filipe Arnould",
        bimesterOne: 7.0,
        bimesterTwo: 9.5,
    },
]

let meanFinal;
let message;

for(let person of students){
    meanFinal = calcIMC(person.bimesterOne, person.bimesterTwo)
    
    if(meanFinal >= 7){
        alert(`
            A média do(a) aluno(a) é: ${meanFinal}
            Parabéns, ${person.name}! Você foi aprovado(a) no concurso!
        `)
    }else{
        alert(`
            A média do(a) aluno(a) é: ${meanFinal}
            Não foi dessa vez, ${person.name}! Continue tentando...
        `)
    }
}

function calcIMC(n1, n2){
    return (n1+n2)/2
}