/*
    LAÇOS DE REPETIÇÃO (FOR)

        * Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

    EXEMPLO ABAIXO UTILIZANDO FOR:
*/

for (let i = 1; i <= 10; i++)
{
    console.log(i)
}


/*
    LAÇOS DE REPETIÇÃO (WHILE)

        * Esse laço é mais recomendado utilizar quando não sabemos o critério de parada.

    EXEMPLO ABAIXO UTILIZANDO WHILE:
*/


let aux = 0;

while(aux < 50)
{
    console.log(aux)
    aux++;
}


/*
    LAÇOS DE REPETIÇÃO (FOR OF)

        * Esse laço é bastante utilizado para percorrer vetores.

    EXEMPLO ABAIXO UTILIZANDO FOR OF:
*/

salada = ['abacate', 'banana', 'abacaxi', 'mamão', 'melão','maçã', 'uva']

for(let fruta of salada){
    console.log(fruta)
}

/*
    LAÇOS DE REPETIÇÃO (FOR IN)

        * Esse laço é utilizado para percorrer objetos.

    EXEMPLO ABAIXO UTILIZANDO FOR IN:
*/

let person = {
    name: 'Álisson', 
    age: 28,
    height: 1.75
}

for(let property in person){
    console.log(`${property} - ${person[property]}`)
}