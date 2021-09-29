function calcular(){
	var n = parseInt(document.getElementById("factorial").value);
	var factStr = n + "! = ";
	var res = n;

	for (var i = n - 1; i >= 1; i--) {
		factStr += (i == 1) ? "" + i + " = " : i + " * ";
		res *= i;
	}

	document.getElementById('respuesta').innerHTML = factStr + res;
}