var telefono = document.getElementById('telefonoIpt').value;
var nombre = document.getElementById('nombreIpt').value;
var hora = document.getElementById('horaIpt').value;

var expTlf = /^[6789][0-9]-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
var expNom = /^$/;
var expHora = /^(0[0-9]|1[0-9]|2[0-3]):([0-5]\d):([0-6][0-9])$/;

function validar() {
    

    document.getElementById('telefono').innerHTML = '';
    document.getElementById('normal').innerHTML = '';
    document.getElementById('hora').innerHTML = '';
}