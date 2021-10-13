var timer = '';
let texto = '';
var aux = '';

function rotar(direccion) {
	//añadido espacio en blanco al final para embellecer
	texto = document.getElementById("texto").value + " - ";
	timer = setInterval('pintar(' + direccion + ')', 500);
}

function pintar(direccion) {
	if (direccion == 0) {
		//DERECHA
		texto = texto.charAt(texto.length - 1) + texto.substr(0, texto.length - 1);
		document.getElementById("rotarDerecha").disabled = true;
		document.getElementById("rotarIzquierda").disabled = true;
		document.getElementById("stopIzquierda").disabled = true;
	} else if (direccion == 1) {
		//IZQUIERDA
		texto = texto.substr(1, texto.length - 1) + texto.charAt(0);
		document.getElementById("rotarIzquierda").disabled = true;
		document.getElementById("rotarDerecha").disabled = true;
		document.getElementById("stopDerecha").disabled = true;
	} 
	document.getElementById("respuesta").innerHTML = texto;
}

function parar() {
	clearInterval(timer);
	document.getElementById("rotarIzquierda").disabled = false;
	document.getElementById("stopIzquierda").disabled = false;
	document.getElementById("rotarDerecha").disabled = false;
	document.getElementById("stopDerecha").disabled = false;
}