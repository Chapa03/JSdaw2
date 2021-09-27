function hallarFactores(){
	var n = parseInt(document.getElementById("numero").value);
	var primos = "";
	var aux = n;

	for (var i = 2; i <= n; i++){
		while (aux % i == 0){
			primos += (primos == "") ? "" + i : " * " + i;
			aux = aux / i; 
		}
	}
	document.getElementById("respuesta").innerHTML = primos;
}