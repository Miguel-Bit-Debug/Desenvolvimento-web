"use strict";
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getIdade() {
        return this._idade;
    }
    setIdade(idade) {
        this._idade = idade;
    }
}
let pessoa = new Pessoa("Fulano", 10);
pessoa.setNome("Ciclano");
console.log(`${pessoa.getNome()} tem ${pessoa.getIdade()} anos`);
