function vehiculo(){
	var marca = document.getElementById("marca").value;

	switch(marca.toLowerCase()){
		case "citroen":
		case "citröen":
			document.getElementById("taller").innerHTML = "Enviaremos tu vehículo a Talleres Doctor Esquerdo";
			break;
		case "ford":
			document.getElementById("taller").innerHTML = "Enviaremos tu vehículo a Talleres Velasco";
			break;
		case "peugeot":
			document.getElementById("taller").innerHTML = "Enviaremos tu vehículo a Talleres Las Acacias";
			break;
		default:
			alert("Disculpe, no reconocemos esa marca en nuestra base de datos");
			document.getElementById("marca").value = "";
			document.getElementById("taller").innerHTML = "";
	}
}