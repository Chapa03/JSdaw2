var respuesta = "";

// fromCharCode(cod1,...,codn) 
// charCodeAt(caracter) 

respuesta += "a. Valor de A: [" + "A".charCodeAt(0) + "] <br/>" + "b. Valor de B: [" + "B".charCodeAt(0) + "]<br/>" + "c. Valor de Ñ: [" + "Ñ".charCodeAt(0) + "]<br/>" + "d. Valores 72, 79, 76, 65: [" + String.fromCharCode(72, 79, 76, 65) + "]";

document.write(respuesta);