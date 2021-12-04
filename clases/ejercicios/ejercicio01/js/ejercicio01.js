class Car{
    constructor(marca){
        this._marca = marca;
    }
}

var coches = [];

function insertar(){
    var nombre = document.getElementById("marca").value;
    var coche = new Car(nombre);
    coches.push(coche);
    listaCoches();
}

function listaCoches(){
    var lista = "";
    for (var a of coches) {
        lista += a._marca + "<br/>";
    }
    document.getElementById("resultado").innerHTML = lista;
}