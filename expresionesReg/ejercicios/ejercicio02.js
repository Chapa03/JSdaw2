function validar() {
    var telefono = document.getElementById('telefonoIpt').value;
    var nombre = document.getElementById('nombreIpt').value;
    var hora = document.getElementById('horaIpt').value;

    var expTlf = /^[6789][0-9]-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    //var expTlf = /^$/;
    var expNom = /^[A-Z][a-z]{2}[a-zñç\s]{,32}$/;
    var expHora = /^(0[0-9]|1[0-9]|2[0-3]):([0-5]\d):([0-5][0-9])$/;

    document.getElementById('telefono').innerHTML = (expTlf.test(telefono)) ? "Teléfono válido" : "Teléfono NO válido";
    document.getElementById('nombre').innerHTML = (expNom.test(nombre)) ? "Nombre válido" : "Nombre NO válido";
    document.getElementById('hora').innerHTML = (expHora.test(hora)) ? "Hora válida" : "Hora NO válida";
}