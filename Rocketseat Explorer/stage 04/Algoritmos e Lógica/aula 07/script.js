/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

let option;
let itemsList = []


while(option != 3){
    let item;
    option = Number(prompt
        (`
        Olá usuário! Digite o número da opção desejada:
        
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa
        `))
    
    switch (option){
        case 1:
            item = prompt("Item a ser adicionado: ")
            itemsList.push(item)
            break;

        case 2:
            if(itemsList.length == 0){
                alert("Não existem itens cadastrados!")
            }else{
                alert(itemsList)
            }
        default:
            alert("Opção inválida!")
            break;
    }
}

alert("Confirme para fechar o aplicativo!")

