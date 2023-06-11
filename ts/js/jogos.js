"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseEntity_1 = __importDefault(require("./baseEntity"));
class Jogo extends baseEntity_1.default {
    constructor(nome, dataLancamento, id) {
        super(id);
        this.nome = nome;
        this.dataLancamento = dataLancamento;
    }
}
