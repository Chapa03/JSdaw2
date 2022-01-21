var lista1 = navegador.lista1.options;
var lista2 = navegador.lista2.options;
var texto;

function addOption() {
    texto = navegador.texto.value;
    lista1[lista1.length] = new Option(texto, "", "", "");
}

function moveSelection(direccion) {
    var seleccion = [];
    for (var i = lista1.length - 1; i >= 0; i--){
        if (lista1[i].selected) {
            seleccion = new Option(lista[i].text, "", "", "");
        }
    }
    for (var i = 0; i <= seleccion.length - 1; i++){
        lista2[i].push(seleccion[i]);
    }
}

function moveAll(direccion) {

}

function deleteAll(lista) {

}

function copySelection(direccion) {

}

function deleteSelection(lista) {

}