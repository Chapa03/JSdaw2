function validar(form) {
    if (form.opciones.options[form.opciones.selectedIndex].value == "0") {
        alert("Por favor, elige una opción.");
        form.opciones.focus();
    } else {
        form.submit();
    }
}