var imagenes = ['./img/uno.jpg', './img/dos.jpg', './img/tres.jpg', './img/cuatro.jpg'];
var idx = 0;

mostrarImagen();

function primero() {
    idx = 0;
    mostrarImagen();
}

function anterior() {
    if (idx != 0){
        idx -= 1;
    } else {
        idx = imagenes.length - 1;
    }
    mostrarImagen();
}

function siguiente() {
    if (idx != imagenes.length - 1){
        idx += 1;
    } else {
        idx = 0;
    }
    mostrarImagen();
}

function ultimo() {
    idx = imagenes.length - 1;
    mostrarImagen();
}

function mostrarImagen() {
    document.getElementById('imagen').src = imagenes[idx];
}

/*
function listar() {
    var ventanaListar = window.open("", "Visor del array", "top=75,left=850,width=350,height=675");
    orden = imagenes.slice();
    var tabla = '';
    for (var i = 0; i < imagenes.length; i++) {
        tabla += '<tr><td>' + imagenes[i] + '</td><td>' + orden.sort(compareForSortAsc)[i] + '</td><td>' + orden.sort(compareForSortDesc)[i] + '</td></tr>'
    }

    var codigo = '<body>'
                + '<h2>Listado:</h2>'
                + '<label for="n">Array original:</label>'
                + '<br/>'
                + '<input type="text" id="n" size="40" disabled="disabled"/>'
                + '<br/>'
                + '<br/>'
                + '<label for="a">Orden ascendente:</label>'
                + '<br/>'
                + '<input type="text" id="a" size="40" disabled="disabled"/>'
                + '<br/>'
                + '<br/>'
                + '<label for="d">Orden descendente:</label>'
                + '<br/>'
                + '<input type="text" id="d" size="40" disabled="disabled"/>'
                + '<br/>'
                + '<h2>Tabla:</h2>'
                + '<table border=1><tr><th>Array</th><th>Orden Ascendente</th><th>Orden Descendente</th></tr>' + tabla + '</table>'
                + '<br/>'
                + '<br/>'
                + '<input type="button" id="btn" onclick="window.close();" value="Cerrar ventana"/>'
                + '<script>'
                + 'document.getElementById("n").value="' + imagenes + '";'
                + 'document.getElementById("a").value="' + orden.sort(compareForSortAsc) + '";'
                + 'document.getElementById("d").value="' + orden.sort(compareForSortDesc) + '";'
                + '</script>'
                + '</body>';

    ventanaListar.document.open();
    ventanaListar.document.write(codigo);
    ventanaListar.document.close();
}
*/

