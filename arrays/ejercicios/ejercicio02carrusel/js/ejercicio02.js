var imagenes = ['./img/uno.png', './img/dos.png', './img/tres.png', './img/cuatro.png', './img/cinco.png'];
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


