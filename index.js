import { criarItem } from "./scripts/criar-item-da-lista.js";

const botaoAdicionar = document.getElementById("adicionar-item");

const listaDeItens = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItem();
    listaDeItens.appendChild(itemDaLista);
    verificarListaVazia()

});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const listaDeCompras = listaDeItens.querySelectorAll("li");
    if (listaDeCompras.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}
verificarListaVazia()