function convertir() {
	var formateado = "";
	var nombre = document.getElementById('nombre').value.toLowerCase();
	var ape1 = document.getElementById('ape1').value.toLowerCase();
	var ape2 = document.getElementById('ape2').value.toLowerCase();

	//UN STRING ES UN ARRAY DE CARACTERES => str.charAt(0) = str[0]
	formateado = nombre.charAt(0).toUpperCase() + nombre.substr(1, nombre.length - 1) + ' ' 
		+ ape1[0].toUpperCase() + ape1.substr(1, ape1.length - 1) + ' '
		+ ape2[0].toUpperCase() + ape2.substr(1, ape2.length - 1);

	document.getElementById('respuesta').innerHTML = formateado;
} 