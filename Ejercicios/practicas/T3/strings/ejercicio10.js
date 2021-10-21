function comprobar() {
	var frase = document.getElementById('frase').value;
	var espacios = / /gi;
	var fraseSE = frase.replace(espacios, "");
	var respuesta = "";
	var comprobar = true;

	for (var i = 0; i < fraseSE.length; i++) {
		if ((fraseSE[i] != fraseSE[fraseSE.length - (i + 1)]) && comprobar) {
			comprobar = false;
		}
	}

	respuesta += (comprobar) ? "La frase sí es palíndroma" : "La frase no es palíndroma";
	document.getElementById('respuesta').innerHTML = respuesta;
}
