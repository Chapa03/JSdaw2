var fechaCompleta = "";
var fechaHoy = new Date();
var nombreDia = "";
var nombreMes = "";

switch (fechaHoy.getDay()){
	case 0:
		nombreDia = "Domingo";		
		break;
	case 1:
		nombreDia = "Lunes";
		break;
	case 2:
		nombreDia = "Martes";		
		break;
	case 3:
		nombreDia = "Miércoles";
		break;
	case 4:
		nombreDia = "Jueves";		
		break;
	case 5:
		nombreDia = "Viernes";
		break;
	case 6:
		nombreDia = "Sábado";
		break;
}

switch (fechaHoy.getMonth()){
	case 0:
		nombreMes = "Enero";
		break;
	case 1:
		nombreMes = "Febrero";		
		break;
	case 2:
		nombreMes = "Marzo";
		break;
	case 3:
		nombreMes = "Abril";		
		break;
	case 4:
		nombreMes = "Mayo";
		break;
	case 5:
		nombreMes = "Junio";
		break;
	case 6:
		nombreMes = "Julio";		
		break;
	case 7:
		nombreMes = "Agosto";		
		break;
	case 8:
		nombreMes = "Septiembre";		
		break;
	case 9:
		nombreMes = "Octubre";		
		break;
	case 10:
		nombreMes = "Noviembre";		
		break;
	case 11:
		nombreMes = "Diciembre";		
		break;
}

fechaCompleta = "En Sen Fernando de Henares a " + nombreDia + " a " + fechaHoy.getDate() + " de " 
+ nombreMes + " de " + fechaHoy.getFullYear() + " a las " + fechaHoy.getHours() + " horas, " + fechaHoy.getMinutes() 
+ " minutos con " + fechaHoy.getSeconds() + " segundos.";
//document.write(fechaCompleta);
document.getElementById("fecha").innerHTML = fechaCompleta;
















