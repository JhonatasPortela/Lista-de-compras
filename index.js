import { criarItem } from "./scripts/adicionarItem.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const botaoAdicionar = document.getElementById("adicionar-item");

const listaDeItens = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItem();
    listaDeItens.appendChild(itemDaLista);
    verificarListaVazia(listaDeItens)

});

verificarListaVazia(listaDeItens)