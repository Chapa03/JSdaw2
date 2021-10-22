var respuesta = "<h2>Información con el objeto document:</h2>";

//Número de imagenes, links y formularios con la longitud de sus arrays
respuesta += "Hay " + document.images.length + " imágenes en el documento.<br/>"
			+ "Hay " + document.links.length + " links en el documento.<br/>"
			+ "Hay " + document.forms.length + " formularios en el documento.<br/><br/>";

//Ruta y tamaño de las imágenes
for (var i = 0; i < document.images.length; i++) {
	respuesta += "Ruta de la imagen nº " + (i + 1) + ": (" + document.images[i].width + "x" + document.images[i].height + ") - " + document.images[i].src + "<br/><br/>";
}

//Dirección y modo apertura enlaces
for (var i = 0; i < document.links.length; i++) {
	respuesta += "Dirección del enlace nº " + (i + 1) + ": " + document.links[i].href + "<br/>"
				+ "Modo de apertura: " + document.links[i].target + "<br/><br/>";
}

//Nombre del formulario, método de envío y fichero de envío
for (var i = 0; i < document.forms.length; i++){
	respuesta += "Nombre del formulario " + (i + 1) + ": " + document.forms[i].name + "<br/>"
				+ "Método de envío del formulario " + (i + 1) + ": " + document.forms[i].method + "<br/>"
				+ "Fichero al que se envía la Información: " + document.forms[i].action + "<br/><br/>";
}


document.getElementById('miDiv').innerHTML = respuesta;