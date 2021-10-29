function calcular(){
	var hoy = new Date();

	//Datos que introduce el usuario en los campos de texto:
	var diaUsuario = parseInt(document.getElementById("dia").value);
	var mesUsuario = parseInt(document.getElementById("mes").value) - 1;
	var anioUsuario = parseInt(document.getElementById("anio").value);

	//fecha formada a través de los datos anteriores
	var fechaUsuario = new Date(anioUsuario, mesUsuario, diaUsuario);

	var edad = hoy.getFullYear() - fechaUsuario.getFullYear();

	if (edad.getMonth() > hoy.getMonth()){
		edad--;
	}

	document.getElementById("edad").innerHTML = edad;
}