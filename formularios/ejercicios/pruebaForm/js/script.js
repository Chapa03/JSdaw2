function valida() {
    var exp = /^[a-zA-Z]{1,}\.(com)$/;
    var texto = formulario.texto.value;
    var ok = false;

    if (exp.test(texto)) {
        ok = true;
    } else {
        ok = false;
    }
    return ok;
}