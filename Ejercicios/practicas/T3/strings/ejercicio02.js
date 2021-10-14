function convertir() {
	var nombre = document.getElementById('nombre').value;
	var apellido1 = document.getElementById('ape1').value;
	var apellido2 = document.getElementById('ape2').value;	

	var cadena = nombre + " " + apellido1 + " " + apellido2;

	/* PATRON DE REEMPLAZO
	 * entre barras el string que queremos BUSCAR y después los modificadores
	 * g ->  global		i -> ignora mayúsculas
	 * str.replace(reemplazo, "") solo reemplazaría el primer espacio en blanco, no todos
	 */
	var reemplazo = / /gi;
	var respuesta = "Introducido por el usuario con espacios: " + cadena + "<br/>"
						+ "Introducido por el usuario sin espacios: " + cadena.replace(reemplazo, "");

	document.getElementById('respuesta').innerHTML = respuesta;
}