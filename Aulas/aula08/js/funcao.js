// Função sem parametros
function imprimirNome() {
    console.log('Fulano')
}

// imprimirNome()

// Função com parametros
function comparaNumero(n1, n2) {
    if (n1 === n2) {
        console.log(true)
    } else {
        console.log(false)
    }
}

comparaNumero()
comparaNumero(1, 2)

function imprimirNome(p) {
    console.log(p)
    console.log(p.nome)
}

var pessoa = {
    nome: 'Fulano'
}

imprimirNome(pessoa)