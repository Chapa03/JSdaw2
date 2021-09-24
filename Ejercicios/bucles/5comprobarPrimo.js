function comprobarPrimo(){
	var n = parseInt(document.getElementById("numero").value);
	var cont = 0;
	for (i = 1; i <= n; i++){
		if (n % i == 0){
			cont++;
		}
	}
	if (cont == 2){
		document.getElementById("respuesta").innerHTML = "<h1>El número " + n + " <strong>SÍ</strong> es primo</h1>";
	} else {
		document.getElementById("respuesta").innerHTML = "<h1>El número " + n + " <strong>NO</strong> es primo</h1>";
	}
}