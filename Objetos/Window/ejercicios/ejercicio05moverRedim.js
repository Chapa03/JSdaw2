function mover() {
    var ventana;

    ventana = window.open("", "Move Window", "top=80,left=100,width=300,height=250");
    ventana.document.open();
    ventana.setTimeout("window.close()", 5000);
    ventana.setInterval("window.moveBy(10,10)", 200);
}

function resize() {
    var ventana;
    var ancho = 300;
    var alto = 250;
    ventana = window.open("", "Resize Window", "top=80,left=100,width=" + ancho + ",height=" + alto);
    ventana.document.open();
    ventana.setTimeout(window.close, 5000);
    ventana.setInterval("window.resizeBy(10,10)", 200);
}

function moveResize() {
    var ventana;

    ventana = window.open("", "Move and resize window", "top=300,left=500,width=550,height=450");
    ventana.document.open();
    ventana.setTimeout("window.close()", 5000);
    ventana.setInterval("window.moveBy(-10,-10)", 200);
    ventana.setInterval("window.resizeBy(-15,-15)", 200);
}

function abrirEn() {
    var ventana;
    var left = document.getElementById('left').value;
    var top = document.getElementById('top').value;

    ventana = window.open("", "Open at", "top=" + top + ",left=" + left + ",width=300,height=250");
    ventana.document.open();
    ventana.setTimeout("window.close()", 5000);
}

function boton() {
    var left = "Eje X: " + document.getElementById('left').value;
    var top = "Eje Y: " + document.getElementById('top').value;
    document.getElementById('boton').value = "Abrir en: " + left + ', ' + top;
}