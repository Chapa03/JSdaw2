var matricula;
var telefono;
var cp;
var nombre;
var url;

var addButton = entrada.add;

var bMatricula;
var bTelefono;
var bCP;
var bNombre;
var bURL;

function validarM() {
    bMatricula = false;
    matricula = entrada.matricula;
    var matriculaRegEx = /^[0-9]{4}[-][bcdfghijklmnprstvwxyzBCDFGHIJKLMNPRSTVWXYZ]{3}$/;
    if (matriculaRegEx.test(matricula.value)) {
        bMatricula = true;
        matricula.style.color = 'blue';
    } else {
        bMatricula = false;
        matricula.style.color = 'red';
    }
    return bMatricula;
}

function validarT() {
    bTelefono = false;
    telefono = entrada.telefono;    
    var telefonoRegEx = /^[6789][0-9][-][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
    if (telefonoRegEx.test(telefono.value)) {
        bTelefono = true;
        telefono.style.color = 'blue';
    } else {
        bTelefono = false;
        telefono.style.color = 'red';
    }
}

function validarCP() {
    bCP = false;
    cp = entrada.cp;    
    var cpRegEx = /^[0-9]{5}$/;
    if (cpRegEx.test(cp.value)) {
        bCP = true;
        cp.style.color = 'blue';
    } else {
        bCP = false;
        cp.style.color = 'red';
    }
}

function validarN() {
    bNombre = false;
    nombre = entrada.nombre;    
    var nombreRegEx = /^[a-zA-ZñÑçÇáÁéÉíÍóÓúÚ]{2}[a-zA-ZñÑçÇ\-áÁéÉíÍóÓúÚ ]{0,18}$/;
    if (nombreRegEx.test(nombre.value)) {
        bNombre = true;
        nombre.style.color = 'blue';
    } else {
        bNombre = false;
        nombre.style.color = 'red';
    }
}

function validarU() {
    bURL = false;
    url = entrada.url;    
    var urlRegEx = /^(http:\/\/)?$/;
    if (urlRegEx.test(url.value)) {
        bURL = true;
        url.style.color = 'blue';
    } else {
        bURL = false;
        url.style.color = 'red';
    }
}

function validar() {
    if (bMatricula && bTelefono && bCP && bNombre && bURL) {
        addButton.disabled = false;
    }
}