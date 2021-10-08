function generar() {
	var numeros = [];
	var min = parseInt(document.getElementById("menor").value);
	var max = parseInt(document.getElementById("mayor").value);
	var cant = parseInt(document.getElementById("cantidad").value);
	var nuevo = 0;
	var checkRepetidos = document.getElementById("repetidos").checked;
	var checkOrdenados = document.getElementById("ordenados").checked;

	if (min > max) {
		var aux = min;
		min = max;
		max = aux;
	}
	if (cant > (max - min + 1) && !checkRepetidos){
		alert(cant + " valores no repetidos no entran en un rango de " + (max - min + 1) + " números.");
	} else {
		console.log(cant + '  ' + (max - min +1));
		for (var i = 1; i <= cant; i++) {
			nuevo = Math.floor((Math.random() * (max - min + 1)) + min);
			var repe = true;

			if (checkRepetidos) {
				numeros[i] = nuevo;
			} else {
				for (var j = 0; j <= numeros.length; j++) {
					if (nuevo == numeros[j]){
						repe = false;
					}
				}
				if (repe){
					numeros[numeros.length] = nuevo;
				} else {
					i--;
				}
			}
			if (checkOrdenados) {
				numeros.sort(comparar);
			}
		}
	}
	document.getElementById("resultado").innerHTML = numeros;
}

//función de comparación para utilizar con array.sort(comparar)
//ya que sino, array.sort(), sigue el orden Unicode de Strings
function comparar(a, b) {
	return a - b;
}