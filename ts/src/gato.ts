class Gato implements Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    fazerSom(): string {
        return `${this.nome} está miando`
    }
}

let gato = new Gato("Dovahkiin");

console.log(gato.fazerSom())
