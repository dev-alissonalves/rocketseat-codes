/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */
let imc;

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

//FUNÇÃO COMUM NOMEADA
function imcCalc(patients){
    imc = (patients.weight / (patients.height**2)).toFixed(2)
    return `O paciente ${patients.name} possui o IMC de ${imc}`
}

for(let patient of patients){
    let message = imcCalc(patient)
    alert(message)
}

/*
    UTILIZANDO ARROW FUNCTIONS

    const imcCalc = (patient) => {
        imc = (patients.weight / (patients.height**2)).toFixed(2)
        return `O paciente ${patients.name} possui o IMC de ${imc}`
    }
*/

/*
    UTILIZANDO FUNÇÕES ANÔNIMAS

    const imcCalc = function (patient) {
        imc = (patients.weight / (patients.height**2)).toFixed(2)
        return `O paciente ${patients.name} possui o IMC de ${imc}`
    }
*/