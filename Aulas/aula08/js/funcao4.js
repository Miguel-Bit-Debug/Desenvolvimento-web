// Escopo de variaveis

let nome = 'Fulano' // global
let cpf = '3243243225'

console.log(cpf)
if (nome == 'Fulano') {
    let sobrenome = 'Teste' // local
    console.log(sobrenome)
}

for (let index = 0; index < 1; index++) {
    let nome2 = 'dolinho'
}

console.log(nome2)
