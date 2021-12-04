for (var i = 1; i <= 100; i++) {
	if (i % 10 == 7 || i % 7 == 0){
		document.write(" 💥 <br/>");
	} else {
		document.write((i == 100) ? i + ".": i + ", ");
	}
}