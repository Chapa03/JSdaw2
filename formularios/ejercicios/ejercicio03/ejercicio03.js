var usuarioLen = formulario1.usuario.value.length;
var usuario = formulario1.usuario.value;
var pass = formulario1.pass.value;

function activar() {
    usuarioLen = formulario1.usuario.value.length;
    if (usuarioLen > 0) {
        formulario1.pass.disabled = false;
        formulario1.validar.disabled = false;
    } else {
        formulario1.pass.disabled = true;
        formulario1.validar.disabled = true;
    }
}

function validar() {
    var resultado = false;
    usuarioControl = 'admin';
    passControl = 'admin';

    if ((usuario == usuarioControl) && (pass == passControl)) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}