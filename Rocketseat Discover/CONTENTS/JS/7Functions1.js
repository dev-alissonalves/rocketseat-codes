/*
    FUNCTIONS

        * Uma função JavaScript é um bloco de código separado do bloco principal que é projetado para executar uma tarefa específica. Evita repetições desnecessários dentro de um mesmo código

    EXEMPLO ABAIXO DE UMA FUNÇÃO SIMPLES:
*/

function showName(nomePrincipal){
    let nomeCompleto = nomePrincipal + 'Alves';
    return nomeCompleto;
}

let nomePrincipal = prompt("Digite uma mensagem: ")
document.write(showName(nomePrincipal))