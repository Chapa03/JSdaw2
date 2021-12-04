class Humano{
	constructor(edad, peso) {
	    this._edad = edad;
        this._peso = peso;
	}

	set edadHumano(edad) {
		this._edad = edad;
	}
	set pesoHumano(peso) {
		this._peso = peso;
	}

	get edadHumano() {
		return this._edad;
	}

	get pesoHumano() {
		return this._peso;
	}
	
	comer(){
	   this._peso++;
	}

	correr() {
		this._peso--;
	}

	static mostrarDatos(){
	    document.getElementById('mostrar').innerHTML+="<br> mostrarDatos<br>";
		for(var mi of tabla){
		  	document.getElementById('mostrar').innerHTML+="<br>Dato devuelto por el metodo de clase<br>" + this._edad;
		}
	}	
	//////////////////////////////////////
	//// metodo de objeto ////////////////
	//////////////////////////////////////
	mostrarUnDato(){
	   document.getElementById("demo").innerHTML += "<br> Dato devuelto por el metodo del objeto -- " + this._edad;	   
	}
}

var allHumans = [];

function addHuman() {
	var edadHumano = parseInt(document.getElementById('edad').value);
	var pesoHumano = parseInt(document.getElementById('peso').value);

	allHumans.push(new Humano(edadHumano, pesoHumano));

	mostrarHumanos();
}

function mostrarHumanos() {
	document.getElementById('mostrar').innerHTML = allHumans;
}