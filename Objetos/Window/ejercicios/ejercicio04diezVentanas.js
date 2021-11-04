function abrir() {
    var posicion = 60;

    for (var i = 1; i <= 10; i++) {
        var ventana;
        var posDim = "top=" + (posicion + (i*25)) + ",left=" + (posicion + (i*30)) + ",width=300,height=350";
        ventana = window.open("", "miVentana" + i, posDim);
        ventana.document.open();
        ventana.document.write('<h3>Ventana emergente ' + i + '</h3>' +
                                '<button type="button" onclick="window.close();">Cerrar ventana ' + i + '</button>');
        ventana.setTimeout("window.close()", 5000);
    }
}