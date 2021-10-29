for (var i = 1; i <= 300; i++){
	
	if (i % 4 == 0){
		document.write("<font id='cuatro' >" + i + "</font> ");
	} else if (i % 9 == 0){
		document.write("<font id='nueve' >" + i + "</font> ");
	} else {
		document.write(i + ", ");
	}
	
	if (i % 10 == 0){
		document.write("<br/>");
	}
}