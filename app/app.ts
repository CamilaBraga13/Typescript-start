import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 20, 150);
console.log(negociacao.volume);
 