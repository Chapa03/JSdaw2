var ventana;

function abrir() {
    var posicion = document.getElementById('posicion').value;
    var posDim = "top=" + posicion + ",left=" + posicion + ",width=300,height=350";

    ventana = window.open("", "miVentana", posDim);
    ventana.document.open();
    ventana.document.write('<h3>Ventana emergente</h3>' +
                            '<button type="button" onclick="window.close();">Cerrar ventana</button>');
    var temporizador = setTimeout("ventana.window.close()", 10000);
}