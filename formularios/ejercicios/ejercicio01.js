function validar() {
    var correcto = true;
    var nombre = formulario1Name.nombre.value;
    var hora = document.getElementById("miTexto").value;
    var hora = /^([01]\d|2[0-3]):([0-5]\d):([012345][0-9])$/;

    if (hora.test()) {
          document.getElementById("mostrar").innerHTML = "La hora es correcta";
    } else {
        document.getElementById("mostrar").innerHTML = "La hora NO es correcta";
        correcto = false;	
    }

    var texto2 = miFormulario.miTexto2.value;
    var texto02 = document.getElementById("miTexto2").value;
    var nombre = /^$/;

    
    //document.getElementById("miFormulario").submit()
    //miFormulario.submit();
    return correcto;
}