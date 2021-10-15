function comprobar() {
	var ciudades = ['Madrid', 'Barcelona', 'Sevilla', 'Bilbao'];
	var ciudad = document.getElementById('ciudad').value;
	var respuesta = "La ciudad introducida ";
	var cont = 0;

	for (var i = 0; i < ciudades.length; i++){
		cont += (ciudad.toLowerCase() == ciudades[i].toLowerCase()) ? 1 : 0;
	}

	respuesta += (cont != 0) ? 
		"es " + ciudad[0].toUpperCase() + ciudad.substring(1, ciudad.length).toLowerCase() + "." : "no es correcta.";

	document.getElementById("respuesta").innerHTML = respuesta;
}