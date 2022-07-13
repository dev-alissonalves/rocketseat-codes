/* 
    TRANSFORMAR NOTAS ESCOLARES

    CRIE UM ALGORITMO QUE TRANSFORME AS NOTAS DO SISTEMA NUMÉRICO PARA SISTEMAS DE NOTAS EM CARACTERES A, B, C, D e F

    * de 90 para cima - A
    * entre 80 e 89 - B
    * entre 70 e 79 - C
    * entre 60 e 69 - D
    * menor que 60 - F
*/

let op;
let notas = [];
let sum = 0;
let media = 0;

function startEnd(op){
    if(op === 'start' || op === 'START'){
        document.write(`<h1> ##### --------- SISTEMAS DE NOTAS -------- ##### </h1>`)
    }
    else{
        document.write()
        document.write(`<h1> ##### --------- FIM DA EXECUÇÃO -------- ##### </h1>`)
    }  
}

startEnd('start')
alert('ATENÇÃO! -> INFORME AS NOTAS NO FORMATO DE 0 A 100')

for(let i = 1; i <= 4; i++){
    notas[i] = Number(prompt(`Informe a sua ${i}° nota: `))
    sum += notas[i]
}

media = sum/4

if(media >= 90)
{
    document.write(`<h2> A média é: ${(media).toFixed(1)} <h2> <br>`)
    document.write(`<h3> CONCEITO - (A) </h3>`)
}
else if (media >= 80 && media < 90)
{
    document.write(`<h2> A média é: ${(media).toFixed(1)} <h2> <br>`)
    document.write(`<h3> CONCEITO - (B) </h3>`)
} 
else if(media >= 70 && media < 80)
{
    document.write(`<h2> A média é: ${(media).toFixed(1)} <h2> <br>`)
    document.write(`<h3> CONCEITO - (C) </h3>`)
}
else if (media >= 60 && media < 70)
{
    document.write(`<h2> A média é: ${(media).toFixed(1)} <h2> <br>`)
    document.write(`<h3> CONCEITO - (D) </h3>`)
}
else if(media < 60 && media >= 0)
{
    document.write(`<h2> A média é: ${(media).toFixed(1)} <h2> <br>`)
    document.write(`<h3> CONCEITO - (F) </h3>`)
}else{
    document.write(`Nota inválida!`)
}

startEnd()