/*
    CONDICIONAIS

        * Em qualquer linguagem de programação, o código precisa tomar decisões e realizar ações de acordo, dependendo de diferentes entradas. Por exemplo, em um jogo, se o número de vidas do jogador é 0, então o jogo acaba. Em um aplicativo de clima, se estiver sendo observado pela manhã, ele mostra um gráfico do nascer do sol; Mostra estrelas e uma lua se for noite.

        * De longe o tipo mais comum de declaração condicional que você usará em JavaScript serão as modestas declarações if ... else.

        * if (condicao) 
          {
            codigo para executar caso a condição seja verdadeira
          } 
          else 
          {
            senão, executar este código
          }

    EXEMPLO ABAIXO DE UMA CONDICIONAL SIMPLES: 
*/

let temperature = 37
if(temperature >= 37.0)
{
    console.log(`Procure uma unidade hospitalar, você está com ${temperature}° de febre.`)
}else{
    console.log(`Sua temperatura está ótima!`)
}


/*
    CONDICIONAIS COMPOSTAS

    * Imagine agora que você quer classificar três categorias de temperaturas
    - FEBRE ALTA (MAIOR OU IGUAL A 37.5)
    - FEBRE MODERADA (ENTRE 37° E 37.5)
    - SAUDÁVEL

    EXEMPLO ABAIXO DE UMA CONDICIONAL COMPOSTA: 
*/

let febreCategoria = 37

if(febreCategoria > 37.5)
{
    console.log(`Febre alta: ${febreCategoria}°`)
}
else if (febreCategoria >= 37 && febreCategoria < 37.5)
{
    console.log(`Febre moderada: ${febreCategoria}`)
}
else
{
    console.log(`Paciente saudável: ${febreCategoria}`)
}



