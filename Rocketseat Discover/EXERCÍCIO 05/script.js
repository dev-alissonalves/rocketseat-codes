function calcDividas(moneyForHome){
    for(let sum of moneyForHome.receitas){
        receitasSoma += sum
    }
    
    for(let sum of moneyForHome.despesas){
        despesasSoma += sum
    }

    saldo = receitasSoma - despesasSoma
    
    if(saldo < 0)
        return console.log(`Saldo negativo de: ${saldo.toFixed(1)}`)
    else
        return console.log(`Saldo positivo de: ${saldo.toFixed(1)}`)
}

let receitasSoma = 0;
let despesasSoma = 0;

const moneyForHome = 
{
    receitas: [50, 65.5, 70.8, 5000],
    despesas: [2500, 3000]
}

calcDividas(moneyForHome)
