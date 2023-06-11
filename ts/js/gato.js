"use strict";
class Gato {
    constructor(nome) {
        this.nome = nome;
    }
    fazerSom() {
        return `${this.nome} está miando`;
    }
}
let gato = new Gato("Dovahkiin");
console.log(gato.fazerSom());
