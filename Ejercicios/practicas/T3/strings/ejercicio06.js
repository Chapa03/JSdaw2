var cadena = "uno dos tres cuatro dos";
//Mostrar la subcadena desde la posición 4, tres caracteres
document.getElementById('a').innerHTML = cadena.substr(4, 3);

//Mostrar la subcadena desde la posición 4 hasta la posición 7
document.getElementById('b').innerHTML = cadena.substring(4, 7);