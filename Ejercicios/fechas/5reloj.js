var timer = '';

//setInterval ejecutará la función horaActual() cada 1000ms
//lo que refrescará la hora cada 1 segundo, para crear el reloj 
function mostrarHora() {
	timer = setInterval('horaActual()', 1000);
	document.getElementById("timerOn").disabled = true;
	document.getElementById("timerOn").title = "Botón deshabilitado para evitar entrar en infinite loop";
	document.getElementById("timerOff").disabled = false;
}

function horaActual() {
	var horaActual = new Date();
	var horaTexto = "";
	var h = horaActual.getHours();
	var m = horaActual.getMinutes();
	var s = horaActual.getSeconds(); 
	horaTexto = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
	document.getElementById("hora").innerHTML = horaTexto;
}

function pararHora(){
	clearInterval(timer);
	document.getElementById("timerOn").disabled = false;
	document.getElementById("timerOn").title = "Reanudar reloj";
	document.getElementById("timerOff").disabled = true;
}

