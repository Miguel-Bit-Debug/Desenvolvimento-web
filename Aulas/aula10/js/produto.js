let produtos = []

let buscar = () => {
    return produtos
}

let criar = (nome, valor, descricao) => {
    produtos.push(
        {
            nome: nome,
            valor: valor,
            descricao: descricao
        }
    )
}

module.exports = {
    buscar,
    criar
}
