let produto = require('./produto.js')

produto.criar('Bolo de murangu', 1000000, 'Melhor bolo do mundo')
produto.criar('Bolo de chocolate', 2000, 'Bolo tooooooop')

let produtos = produto.buscar()

console.log(produtos)
