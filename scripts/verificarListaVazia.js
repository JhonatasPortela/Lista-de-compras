const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeItens) {
    const listaDeCompras = listaDeItens.querySelectorAll("li");
    if (listaDeCompras.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;