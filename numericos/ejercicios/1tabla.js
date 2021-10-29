var tabla = '<table><tr><th>Grados</th><th>Radianes</th><th>Seno</th><th>Coseno</th></tr>';
for (var i = 0; i <= 360; i += 10){
	var iRad = ((Math.PI * i) / 180);
	tabla += "<tr><td>" + i + "</td><td>" + iRad.toFixed(3) + "</td><td>" + Math.sin(iRad).toFixed(3) + "</td><td>" + Math.cos(iRad).toFixed(3) + "</td></tr>";
}
document.write(tabla + "</table>");