function hallarFactores(){
	var n = parseInt(document.getElementById("numero").value);
	var operar = true;
	var primos = "";

	for (int i = 2; i <= n; i++){
		if (n % i == 0){
			primos += "" i + " x ";
			n /= i; 
		}
	}
	document.getElementById("respuesta").innerHTML = primos;
}