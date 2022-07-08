/*
    Variáveis
    
    * Nomes simbólicos para receber algum valor
    * Atalhos de código
    * Identificadores
    * Em JavaScript temos 3 palavras reservadas para criar variáveis 
        - var
        - let
        - const 

    * O JS é uma linguagem fracamente tipada e dinâmica
        - Variáveis não precisam ter um tipo previamente definido
        - Podemos mudar o conteúdo da variável
*/

let a = 10
let b = "Um texto"

const pi = 3.14

var carro = 'Frontier 2.8'
var v = true

/*
    Escopo em JavaScript

        * Escopo determina a visibilidade de alguma variável no JavaScript

    
    Declaração de Bloco
        
        * Blocos são pequenos trechos de código onde se cria níveis de visibilidade diferentes em nossos códigos

        * Exemplo:
            {
                Aqui é um bloco A
                Esse bloco está em um nível de visibilidade.
            }

            {
                Aqui é um bloco B
                Esse está em outro nível de visibilidade.
            }
*/


// Demonstrando o conceito de escopo com Var
{
    var x = 10
    console.log(x)
}

console.log(x)

//Existe esse x fora do escopo acima?
// Já ouviram falar em Hoisting?


// Demonstrando o conceito de escopo com Let
//console.log(y)

{
    let y = 15
    console.log(y)
}
/*
    * console.log(y)
    * Hoisting não funciona com Let e Const
    * Cons e Let são locais e só funcionam no escopo onde foram criadas.
*/

/* 
    * Para const, segue-se as mesmas regras aplicadas ao let.

    * No entanto, após uma variável ser criada como const seu valor 
    não pode ser alterado em tempo de execução, apenas em uma re-atribuição.
*/

const y = 10;
console.log(y)
{
    const y = 20
    console.log(y)
}
