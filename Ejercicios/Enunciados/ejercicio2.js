function limpiar() {
	document.getElementById('nombre').value = "";
	document.getElementById('edad').value = "";
	document.getElementById('respEdad').innerHTML = "";
	document.getElementById('respNombre').innerHTML = "";
}

function validar() {
	var nombre = document.getElementById('nombre').value;
	var edad = document.getElementById('edad').value;
	var abc = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ áÁéÉíÍóÓúÚñÑçÇ";
	var num = "0123456789";
	var errores = "Hay caracteres no permitidos en las posiciones ";
	var erroresLetras = errores;
	var erroresNumeros = errores;

	if (nombre.length >= 3 && nombre.length <= 25) {
		for (var i = 0; i < nombre.length; i++) {
			if (abc.indexOf(nombre[i]) == - 1) {
				erroresLetras += (i == nombre.length - 1) ? ' y ' + (i + 1) : (i + 1) + ', ';
			}
		}
		if (erroresLetras.length > errores.length) {
			document.getElementById('respNombre').innerHTML = erroresLetras;
		} else {
			document.getElementById('respNombre').innerHTML = "Todos los caracteres son correctos";
		}
	} else {
		document.getElementById('respNombre').innerHTML = "Debes introducir un mínimo de 3 caracteres y un máximo de 25.";
	}

	if (edad.length >= 1 && edad.length <= 3) {
		if ((parseInt(edad) >= 5) && (parseInt(edad) <= 110)) {
			for (var i = 0; i < edad.length; i++) {
				if (num.indexOf(edad[i]) == - 1) {
					erroresNumeros += (i == edad.length - 1) ? ' y ' + (i + 1) : (i + 1) + ', ';
				}
			}
			if (erroresNumeros.length > errores.length) {
				document.getElementById('respEdad').innerHTML = erroresNumeros;
			} else {
				document.getElementById('respEdad').innerHTML = "Todos los caracteres son correctos";
			}
		}

	} else {
		document.getElementById('respEdad').innerHTML = "Debes introducir un mínimo de 1 caracter y un máximo de 3.";
	}
}