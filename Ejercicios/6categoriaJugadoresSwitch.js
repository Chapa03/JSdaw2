function categoria(){
	var edad = parseInt(document.getElementById("edad").value);
	var texto = "";
	switch (edad){
		case 5:
		case 6:
		case 7:
			document.getElementById("cat").innerHTML = "<h2>La categoría del jugador es PRE BENJAMÍN</h2>";
			break;
		case 8:
		case 9:
			document.getElementById("cat").innerHTML = "<h2>La categoría del jugador es BENJAMÍN</h2>";
			break;
		case 10:
		case 11:
			document.getElementById("cat").innerHTML = "<h2>La categoría del jugador es ALEVÍN</h2>";
			break;
		case 12:
		case 13:
			document.getElementById("cat").innerHTML = "<h2>La categoría del jugador es INFANTIL</h2>";
			break;
		case 14:
		case 15:
			document.getElementById("cat").innerHTML = "<h2>La categoría del jugador es CADETE</h2>";
			break;
		case 16:
		case 17:
		case 18:
			document.getElementById("cat").innerHTML = "<h2>La categoría del jugador es JUVENIL</h2>";
			break;
		default:
			document.getElementById("cat").innerHTML = "<h2>FUERA DE CATEGORÍA</h2>";
	}
}