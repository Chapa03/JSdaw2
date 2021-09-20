function esDivisible(){
	var a = parseInt(document.getElementById("numero").value);
	if (a % 2 == 0) {
		document.getElementById("respuesta").innerHTML = "El número " + a + " es divisible entre 2";
	} else if (a % 3 == 0){
		document.getElementById("respuesta").innerHTML = "El número " + a + " es divisible entre 3";
	} else if (a % 5 == 0){
		document.getElementById("respuesta").innerHTML = "El número " + a + " es divisible entre 5";
	} else if (a % 7 == 0){
		document.getElementById("respuesta").innerHTML = "El número " + a + " es divisible entre 7";
	} else {
		document.getElementById("respuesta").innerHTML = "El número " + a + " NO es divisible por alguno de los primos 2, 3, 5 o 7.";
	}
}