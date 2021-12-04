function crear() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('nombre').value;
    var direccion = document.getElementById('nombre').value;
    var fechaNac = document.getElementById('nombre').value;
    var genero = document.getElementById('nombre').value;
    var cP = document.getElementById('cP').value;
    var persona = new Persona(nombre, apellido, direccion, fechaNac, genero, cP);
    document.getElementById('persona').innerHTML = persona;
}