/*
  Capture 10 items para compor a lista de um supermercado.
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = [];
for(let count = 0; count < 10; count++){
    itemName = prompt("Digite o item: " + (count+1))
    items[count] = (itemName)
}

alert(items)