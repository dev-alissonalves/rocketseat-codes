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

alert('ATENÇÃO! -> INFORME AS NOTAS NO FORMATO DE 0 A 100')

for(let i = 1; i <= 4; i++){
    notas[i] = Number(prompt(`Informe a sua ${i}° nota: `))
    sum += notas[i]
}

media = sum/4

let changeElementH2 = document.querySelector('h2#mean-result')
let changeElementH3 = document.querySelector('h3#concept')


if(media >= 90)
{
    changeElementH2.innerHTML = 'A sua média foi: ' + media
    changeElementH2.style.color = '#228813c6'

    changeElementH3.innerHTML = 'SEU CONCEITO FOI (A) - PARABÉNS!'
    changeElementH3.style.color = '#228813c6'
    
}
else if (media >= 80 && media < 90)
{
    changeElementH2.innerHTML = 'A sua média foi: ' + media
    changeElementH2.style.color = '#228813c6'

    changeElementH3.innerHTML = 'SEU CONCEITO FOI (B) - PARABÉNS!'
    changeElementH3.style.color = '#228813c6'
} 
else if(media >= 70 && media < 80)
{
    changeElementH2.innerHTML = 'A sua média foi: ' + media
    changeElementH2.style.color = '#ffb62f'

    changeElementH3.innerHTML = 'SEU CONCEITO FOI (C)'
    changeElementH3.style.color = '#ffb62f'
}
else if (media >= 60 && media < 70)
{
    changeElementH2.innerHTML = 'A sua média foi: ' + media
    changeElementH2.style.color = '#ff932f'

    changeElementH3.innerHTML = 'SEU CONCEITO FOI (D)'
    changeElementH3.style.color = '#ff932f'
}
else if(media < 60 && media >= 0)
{
    changeElementH2.innerHTML = 'A sua média foi: ' + media
    changeElementH2.style.color = '#ff2f2f'

    changeElementH3.innerHTML = 'SEU CONCEITO FOI (F) - SINTO MUITO!'
    changeElementH3.style.color = '#ff2f2f'
}else{
    changeElementH2.innerHTML = 'OPERAÇÃO INVÁLIDA - ATUALIZE A PÁGINA E TENTE NOVAMENTE'
    changeElementH2.style.color = '#ff2f2f'
}