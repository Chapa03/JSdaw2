for (var i = 1; i <= 10; i++){
	for (var j = 1; j <= i; j++) {
		if (j != i){
			document.write(j + ' - ');
		} else {
			document.write(j);
		}
		
	}
	document.write("<br/>");
}