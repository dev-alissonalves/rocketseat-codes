/*
    Conforme o ECMAScript standard temos 9 tipos de dados para o JavaScript

    * Tipos:
    - Primitivos
    - Estruturais
    - Primitivos Estruturais

    *Primitivos
    - String
    - Number
    - Boolean
    - undefined 
    - Symbol
    - BigInt

    *Estruturais
        #Object
            - Array
            - Map
            - Set
            - Date
            - ...
    
    * Function
        - null
*/

/*
    String

    * Cadeia de caracteres
    
    * Podem ser escritas entre aspas simples, duplas ou template strings
    Exemplos: 
        - 'ABCDE' (Simples) 
        - "Álisson Alves" (Duplas) 
        - `Olá, Mundo!` (Template Strings)
*/
console.log('Aprendendo sobre Strings')
console.log('Forma 01 - ABCDE')
console.log("Forma 02 - Álisson Alves")
console.log(`Forma 03 - Olá, Mundo!`)
console.log()

/*
    Number

    * Números (Inteiros, Reais, NaN e Infinity)
*/
console.log('Aprendendo sobre Números em JS')
console.log(10)
console.log(10.5)
console.log(Infinity)
console.log(NaN)
console.log()

/*
    Boolean

    * É o tipo que assume apenas dois valores lógicos (Verdairo ou Falso)
*/
console.log('Aprendendo sobre Valores Lógicos (Booleanos)')
console.log(5>4)
console.log(4===2)
console.log()

/*
    Undefined

    * É um valor indefinido, é comum em alguns erros no desenvolvimento alguma operação resultar em Undefined

    Null
    * Valores Nulos
    * Objeto que não possui nada dentro
    * diferente de indefinido
*/

/*
    Object

    * Objeto
    * Propriedades / Atributos
    * Pode possuir funcionalidades / métodos
*/

console.log('Aprendendo sobre Objetos em JS')
console.log()
let objetoJs = {
    name: 'Álisson',
    idade: 26,
    endereço: 'Rua. Zilma Maria Batista'
}
console.log('Exibindo um objeto completo...')
console.log(objetoJs)
console.log()

//É possível selecionar propriedades individuais dentro dos objetos
console.log('Exibindo uma propriedade individual dentro do objeto...')
console.log()
console.log(objetoJs.name)
console.log(objetoJs.idade)

//É possível criar funções/métodos dentro dos objetos

let obj = {
    modelo: 'Fiat Uno',

    acelerar: function(num){
        console.log(num*2)
    }
}

console.log('Chamando um método do objeto!')
console.log(obj.acelerar(5))
console.log()


/*
    Array (Vetores)

    * Uma lista de informações dentro de uma mesma estrutura
    * Agrupamento de Dados
    * Exemplo: 
        - ["Álisson Alves", 28]
*/

console.log('Exibindo informações do vetor/array criado')
let vetInfo = ['Álisson Alves', 26]
console.log(vetInfo)
console.log()