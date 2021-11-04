function pasarNombre() {
    var ventana;
    var nombre = document.getElementById('nombre').value;
    var codigo =    '<label for="nombre">Nombre: </label>'
                    + '<input type="text" id="nombre" disabled="disabled" value="' + nombre + '"><br/>'
                    + '<button type="button" onclick="window.close();">Cerrar ventana</button>';

    ventana = window.open("", "Ventana", "top=80,left=100,width=300,height=250");
    ventana.document.open();
    ventana.document.write(codigo);
}
