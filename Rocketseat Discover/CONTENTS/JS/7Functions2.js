/*
    FUNCTIONS

        * Uma função JavaScript é um bloco de código separado do bloco principal que é projetado para executar uma tarefa específica. Evita repetições desnecessários dentro de um mesmo código

    EXEMPLO ABAIXO DE UMA FUNÇÃO SIMPLES COM PASSAGEM DE PARÂMETROS:
*/

function showName(nome){
    console.log(nome)
}

let nomeAluno = 'Álisson Alves'
showName(nomeAluno) //Aqui eu faço a chamada da função quantas vezes for necessário, passando um valor como parâmetro
showName(nomeAluno)


/*
    //É comum também utilizarmos a nomenclatura de function expression ou function anonymous

    É a maneira de declararmos uma função e alocarmos ela dentro de uma variável

    EXEMPLO ABAIXO DE UMA FUNCTION ANONYMOUS COM RECEBIMENTO DE PARÂMETROS
*/

const sum = function(n1, n2){
    total = n1+n2
    return total
}
let n1 = 90
let n2 = 67

sum(n1, n2)
console.log(`A soma de ${n1} + ${n2} é igual a ${sum(n1, n2)}`)

/*
    FUNCTION HOISTING

    - Nas funções normais (STATEMENT) escritas da seguinte maneira (Acontece HOISTING)
        * function nameFunction(){
            bla bla bla
        }

    - Nas funções anônimas escritas da seguinte maneira (NÃO ACONTECE HOISTING)
        * const myFunction = function(){
            bla bla bla
        }
*/

/*
    ARROW FUNCTIONS

    - Nas funções do tipo Arrow Functions escritas da seguinte maneira (NÃO Acontece HOISTING)
        * const MyFunction = () => {
            bla bla bla
        }
*/

const MyFunction = () => {
    console.log('Funcionou o Hoisting!')
}

//Se colocar antes da função, a chamada não funciona.
MyFunction()

/*
    CALLBACK FUNCTIONS

    - Uma função callback é uma função passada a outra função como argumento, 
    que é então invocado dentro da função externa para completar algum tipo 
    de rotina ou ação.

    - EXEMPLO ABAIXO:
*/


function MyFunctionCallBack(name){
    name()
}

MyFunctionCallBack(
    () => {
        console.log('Função Callback!')
    }
);


/*
    CONSTRUCTOR FUNCTIONS

    - As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções contrutoras no JavaScript quanto Classes no Java têm a mesma utilidade: servir de molde para a criação de objetos.

    - Function() constructor
        * expressão new
        * criar um novo objeto
        * this keyword
        
    - EXEMPLO ABAIXO:
*/

function Person(name){
    this.name = name

    this.walk = function(){
        return this.name + ' está caminhando...'
    }
}

const mayk = new Person('Mayk')
console.log(mayk)

const Álisson = new Person('Álisson Alves')
console.log(Álisson)

const Tomás = new Person('Tomás Alves')
console.log(Tomás)

console.log(Tomás.walk())
console.log(Álisson.walk())
console.log(mayk.walk())