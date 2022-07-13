/*
    Desafio:

    * Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
        C = (F - 32) * 5/9 
        F = C * 9/5 + 32

*/

let degreeFahr = '140F'
let degreeCelsius = '60C'

function degreeConversion(degree){
    if(degree.toLowerCase().includes('f')){
        let C = (parseInt(degree.replace('f', '')) - 32) * (5/9)
        return console.log(`A sua temperatura convertida é: ${Math.ceil(C)}°C`)
    }
    else if(degree.toLowerCase().includes('c'))
    {
        let F = (parseInt(degree.replace('c', '')) * (9/5)) + 32
        return console.log(`A sua temperatura convertida é: ${Math.ceil(F)}°F`)
    }else{
        throw new Error('Grau não identificado!')
    }
}

degreeConversion(degreeFahr)
degreeConversion(degreeCelsius)



