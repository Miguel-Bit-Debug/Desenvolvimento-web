import BaseEntity from "./baseEntity";

class Jogo extends BaseEntity {
    nome: string;
    dataLancamento: string;

    constructor(nome: string, dataLancamento: string, id: number) {
        super(id);
        this.nome = nome;
        this.dataLancamento = dataLancamento;
    }
}
