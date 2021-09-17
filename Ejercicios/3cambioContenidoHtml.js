

function esMultiplo(){
	var a = parseInt(document.getElementById("numero").value);
	if (a % 2 == 0) {
		document.getElementById("respuesta").innerHTML = "El número " + a + " es múltiplo de 2.";
	} else {
		document.getElementById("respuesta").innerHTML = "El número " + a + " NO es múltiplo de 2.";
	}
}
