var ventana;
var codigo = '<select name="color" id="color">' +
                '<option value="1">Rojo</option>' +
                '<option value="2">Verde</option>' +
                '<option value="3">Amarillo</option>' +
                '<option value="4">Azul</option>' + 
            '</select>' +
            '<button type="button" onclick="cambiarColor();">Cambiar color</button>' +
            '<script src="ejercicio01Select.js"></script>';
function abrir() {
//    ventana = window.open("", "Ventana", "top=150,left=150,width=300,height=250");
//    varVentana.document.open();
//    varVentana.document.write(codigo);
ventana = window.open("", "miVentana", "top=200,left=200,width=300,height=200");
ventana.document.open();
ventana.document.write(codigo);
}

function cambiarColor() {
    var color = parseInt(document.getElementById('color').value);
    switch (color) {
        case 1:
            document.bgColor = "#FA7471";
            break;
        case 2:
            document.bgColor = "#8DF586";
            break;
        case 3:
            document.bgColor = "#F5ED6F";
            break;
        case 4:
            document.bgColor = "#57D1DE";
            break;
    }
}