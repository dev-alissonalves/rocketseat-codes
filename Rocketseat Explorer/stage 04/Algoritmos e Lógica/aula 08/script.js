/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
    {
        name: "Álisson Alves",
        age: 28,
        weight: 80,
        height: 1.75,
    },
    {
        name: "Emilly Alves",
        age: 21,
        weight: 50,
        height: 1.70
    },
    {
        name: "Tomás Alves",
        age: 2,
        weight: 10,
        height: 0.75
    },
    {
        name: "Henrique Alves",
        age: 1,
        weight: 9,
        height: 0.69
    },
]

let patientInfo = []

//1ª FORMA DE FAZER USANDO FOR TRADICIONAL
/*for (let index = 0; index < patients.length; index++){
    patientNames[index] = patients[index].name
}*/

//2ª FORMA DE FAZER USANDO FOR OF
for(let person of patients){
    alert(`
        ---- INFORMAÇÕES ----
        O paciente ${person.name} possui ${person.age} ano(s) de idade.
        Seu peso é ${person.weight} quilo(s) e sua altura é de ${person.height} metro(s).
    `)
}

