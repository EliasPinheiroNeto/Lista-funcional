function listar() {
  var texto_escrito = document.getElementById("textoDigitado");
  if (texto_escrito.value != "") {
    //#region Codigo
    // var item_list = document.createElement("li");
    // var botao_item = document.createElement("input");

    // botao_item.type = "button";
    // botao_item.className = "botao_item";
    // botao_item.value = "Remover";

    // item_list.innerHTML = textoDigitado.value;
    // document.body.append(item_list);
    // item_list.append(botao_item);

    // texto_escrito.value = "";
    //#endregion

    var modelo = document.getElementById("modelo");
    var item = modelo.content.cloneNode(true);
    var li = item.querySelector("li");

    li.append(texto_escrito.value);

    var lista = document.getElementById("lista");
    lista.append(li);
    texto_escrito.value = "";
  }
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    listar();
  }
});
