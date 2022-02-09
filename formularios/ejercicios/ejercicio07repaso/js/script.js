function habilitar() {
    if (navegador.texto.value.length > 0) {
        navegador.alta.disabled = false;
    } else {
        navegador.alta.disabled = true;
    }
}

function addOption() {
    var nuevaOpcion = navegador.texto.value;

    navegador.lista1.options[navegador.lista1.length] = new Option(nuevaOpcion, nuevaOpcion, "", "");
    navegador.texto.value = "";
    habilitar();
}

function moverSelect(direccion) {
    var listaIzq = navegador.lista1;
    var listaDer = navegador.lista2;

    if (direccion == 1) {
        for (var i = lista1.options.length - 1; i >= 0; i--) {
            if (listaIzq.options[i].selected) {
                listaDer.options[listaDer.length] = new Option(listaIzq.options[i].text, listaIzq.options[i].value, "", "");
                listaIzq.options[i] = null;
            }
        }
    } else {
        for (var i = lista2.options.length - 1; i >= 0; i--) {
            if (listaDer.options[i].selected) {
                listaIzq.options[listaIzq.length] = new Option(listaDer.options[i].text, listaDer.options[i].value, "", "");
                listaDer.options[i] = null;
            }
        }
    }
}

function moverTodos(direccion) {
    var listaIzq = navegador.lista1;
    var listaDer = navegador.lista2;

    if (direccion == 1) {
        for (var i = lista1.options.length - 1; i >= 0; i--) {
            listaDer.options[listaDer.length] = new Option(listaIzq.options[i].text, listaIzq.options[i].value, "", "");
            listaIzq.options[i] = null;
        }
    } else {
        for (var i = lista2.options.length - 1; i >= 0; i--) {
            listaIzq.options[listaIzq.length] = new Option(listaDer.options[i].text, listaDer.options[i].value, "", "");
            listaDer.options[i] = null;
        }
    }
}

function borrarLista(lista) {
    var listaIzq = navegador.lista1;
    var listaDer = navegador.lista2;

    if (lista == 1) {
        for (var i = lista1.options.length - 1; i >= 0; i--) {
            listaIzq.options[i] = null;
        }
    } else {
        for (var i = lista2.options.length - 1; i >= 0; i--) {
            listaDer.options[i] = null;
        }
    }
}

function copiarSelect(direccion) {
    var listaIzq = navegador.lista1;
    var listaDer = navegador.lista2;

    if (direccion == 1) {
        for (var i = lista1.options.length - 1; i >= 0; i--) {
            if (listaIzq.options[i].selected) {
                listaDer.options[listaDer.length] = new Option(listaIzq.options[i].text, listaIzq.options[i].value, "", "");
            }
        }
    } else {
        for (var i = lista2.options.length - 1; i >= 0; i--) {
            if (listaDer.options[i].selected) {
                listaIzq.options[listaIzq.length] = new Option(listaDer.options[i].text, listaDer.options[i].value, "", "");
            }
        }
    }
}

function borrarSelect(direccion) {
    var listaIzq = navegador.lista1;
    var listaDer = navegador.lista2;

    if (direccion == 1) {
        for (var i = listaIzq.options.length - 1; i >= 0; i--) {
            if (listaIzq.options[i].selected) {
                listaIzq.options[i] = null;
            }
        }
    } else {
        for (var i = listaDer.options.length - 1; i >= 0; i--) {
            if (listaDer.options[i].selected) {
                listaDer.options[i] = null;
            }
        }
    }
}