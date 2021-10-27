function miFuncion() {
	// Almacenar la nueva ventana en una variable serviría para poder manipularla de alguna forma
	// Si no vamos a manipularla, podemos ahorrarnos la variable
	var miVentana = window.open("https://www.nasa.es", "_blank", "top=300,left=300,width=400,height=400");
}

function miFuncion2() {
	//
	var miVentana = window.open("", "_self");
	miVentana.document.open();
	miVentana.document.write("<p>Estoy reemplazando la ventana actual</p>");
	miVentana.document.close();
}

function miFuncion3() {
	var miVentana = window.open("", "miVentana", "width=600,height=600");
	miVentana.document.open();
	miVentana.document.write("<p>Esta es 'miVentana'</p>");
	miVentana.document.close();
}

function miFuncion4(){
	window.open("https://www.google.es");
	window.open("https://www.w3schools.com", "_blank", "top=300,left=300,width=400,height=400");
}

function miFuncion5(){
	var texto = document.getElementById('texto').value;
	var nuevaVentana = window.open("", texto, "");
	nuevaVentana.document.open();
	nuevaVentana.document.write("<h1>" + nuevaVentana.name + "</h1>");
	nuevaVentana.document.close();
}

var varVentana;
function abrir() {
	// Botón para cerrar la ventana emergente dentro de la propia venta
	// Se puede hacer con un window.close() en el onclick, metiendo un script en la 
	// emergente con la función de cerrar o metiendo el enlace al .js con la función de cerrar
	var texto = '<p>Esta es mi ventana</p><button type="button" onclick="cerrarEmergente();" >Cerrar esta ventana</button><script type="text/javascript" src="ejemplo01.js"></script>';
	varVentana = window.open("", "miVentana", "top=200,left=200,width=200,height=100");
	varVentana.document.open();
	varVentana.document.write(texto);
}

function cerrar() {
	varVentana.close();
}

function cerrarEmergente(){
	window.close();
}