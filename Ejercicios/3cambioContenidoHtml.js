var a = parseInt(document.getElementById("numero"));
if (a % 2 == 0) {
	document.getElementById("idDiv").innerHTML = ("El número " + a + " es múltiplo de 2.");
} else {
	document.getElementById("idDiv").innerHTML = ("El número " + a + " NO múltiplo de 2.");
}
