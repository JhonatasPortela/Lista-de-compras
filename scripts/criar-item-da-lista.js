const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItem(){

    if (inputItem.value.trim() === "") {
        alert("Por favor, insira um item.");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const itemNome = document.createElement("p");
    itemNome.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            itemNome.style.textDecoration = "line-through";
        } else {
            itemNome.style.textDecoration = "none";
        }
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(itemNome);
    
    itemDaLista.appendChild(containerItemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const data = new Date().toLocaleDateString("pt-BR" );
    const hora = new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" });

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    const dataItem = document.createElement("p");
    dataItem.classList.add("texto-data");
    dataItem.innerText = dataCompleta;
    itemDaLista.appendChild(dataItem);

    return itemDaLista;
}