/*
    CALCULADORA COM SWITCH
*/

const Calculadora = (n1, operador, n2) => {
    switch(operador){
        case '+':
            console.log(n1+n2)
            break
        case '-':
            console.log(n1-n2)
            break
        case '*':
            console.log(n1*n2)
            break
        case '/':
            console.log(n1/n2)
            break
        default:
            console.log("Números ou operador inválido!")
    }
}


Calculadora(10, 10)