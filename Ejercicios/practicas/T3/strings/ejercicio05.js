var frase = "busco palabras con menos de cinco letras";

var palabras = frase.split(' ');
var contPal5Car = 0;
var coPatron = /co/gi;

var aoPatron = /a/gi;

//Palabras con menos de 5 letras
for (var i = 0; i < palabras.length; i++) {
	contPal5Car += (palabras[i].length < 5) ? 1 : 0;
}

//Combinación de letras 'co'
var numCoincid = frase.search(coPatron);
var respCoincid = (numCoincid != -1) ? 
					"Sí, hay " + numCoincid + " coincidencias para el patrón 'co'." 
					: "No, no hay coincidencias para el patrón 'co'.";

//letras separadas por ,
var comas = "";
for (var i = 0; i < frase.length; i++) {
	comas += (i != frase.length - 1) ? frase[i] + ',' : frase[i];
}

//primeras 10 letras separadas

var letrasSeparadas = "";
for (var i = 0; i < frase.length; i++) {
	letrasSeparadas += (i <= 10) ? frase [i] + ' ' : frase[i];
}

document.getElementById('numPalabras').innerHTML = contPal5Car;
document.getElementById('co').innerHTML = respCoincid;
document.getElementById('pepe').innerHTML = frase.replace('co', 'Pepe');
document.getElementById('ao').innerHTML = frase.replace(aoPatron, 'o');
document.getElementById('coma').innerHTML = comas;
document.getElementById('separado').innerHTML = letrasSeparadas;




