function mostrarHora(){
	var fecha = new Date();

	document.getElementById("hora").innerHTML = (fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours()) 
		+ ":" + (fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes()) + ":" 
		+ (fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds());
}
