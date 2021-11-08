let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let aux = numeros.slice();
let orden = numeros.slice();
var idx = 0;
var accion = 'normal';

document.getElementById('asc').value = orden.sort(compareForSortAsc);
document.getElementById('desc').value = orden.sort(compareForSortDesc);

aux.push(0);

document.getElementById('actual').value = numeros[idx];
mostrarDisplay();

function primero() {
    idx = 0;
    document.getElementById('actual').value = numeros[idx];
    mostrarDisplay();
}

function anterior() {
    if (accion == 'alta'){
        if (idx != 0){
            idx -= 1;
        } else {
            idx = aux.length - 1;
        }
    } else {
        if (idx != 0){
            idx -= 1;
        } else {
            idx = numeros.length - 1;
        }
    }
    document.getElementById('actual').value = numeros[idx];
    mostrarDisplay();
}

function siguiente() {
    if (accion == 'alta') {
        if (idx != aux.length - 1){
            idx += 1;
        } else {
            idx = 0;
        }
    } else {
        if (idx != numeros.length - 1){
            idx += 1;
        } else {
            idx = 0;
        }
    }
    document.getElementById('actual').value = numeros[idx];
    mostrarDisplay();
}

function ultimo() {
    idx = (accion == 'alta') ? aux.length - 1 : numeros.length - 1;
    document.getElementById('actual').value = numeros[idx];
    mostrarDisplay();
}

function alta() {
    accion = 'alta';
    document.getElementById('baja').disabled = true;
    document.getElementById('modificar').disabled = true;
    document.getElementById('listado').disabled = true;
    document.getElementById('asc').disabled = true;
    document.getElementById('desc').disabled = true;
    document.getElementById('actual').disabled = false;
    document.getElementById('btn').hidden = false;

    mostrarDisplay();
    document.getElementById('actual').value = 'idx.' + idx;
}

function baja() {
    accion = 'baja';
    document.getElementById('alta').disabled = true;
    document.getElementById('modificar').disabled = true;
    document.getElementById('listado').disabled = true;
    document.getElementById('asc').disabled = true;
    document.getElementById('desc').disabled = true;
    document.getElementById('actual').disabled = false;
    document.getElementById('btn').hidden = false;

    mostrarDisplay();
}

function modificar() {
    document.getElementById('primero').disabled = true;
    document.getElementById('anterior').disabled = true;
    document.getElementById('siguiente').disabled = true;
    document.getElementById('ultimo').disabled = true;
    document.getElementById('alta').disabled = true;
    document.getElementById('baja').disabled = true;
    document.getElementById('listado').disabled = true;
    document.getElementById('asc').disabled = true;
    document.getElementById('desc').disabled = true;
    document.getElementById('actual').disabled = false;
    document.getElementById('btn').hidden = false;
}

function listar() {
    document.getElementById('primero').disabled = true;
    document.getElementById('anterior').disabled = true;
    document.getElementById('siguiente').disabled = true;
    document.getElementById('ultimo').disabled = true;
    document.getElementById('alta').disabled = true;
    document.getElementById('baja').disabled = true;
    document.getElementById('modificar').disabled = true;
    document.getElementById('asc').disabled = true;
    document.getElementById('desc').disabled = true;
    document.getElementById('actual').disabled = false;
    document.getElementById('btn').hidden = false;
}

function aceptar() {
        document.getElementById('alta').disabled = false;
        document.getElementById('baja').disabled = false;
        document.getElementById('modificar').disabled = false;
        document.getElementById('listado').disabled = false;
        document.getElementById('asc').disabled = false;
        document.getElementById('desc').disabled = false;
        document.getElementById('actual').disabled = true;
        document.getElementById('btn').hidden = true;
        var numero = parseInt(document.getElementById('actual').value);

    if (accion == 'alta'){
        if (idx <= numeros.length){
            numeros.splice(idx,0,numero);
        } else {
            numeros.push(numero);
        }
        aux.push(0);
        accion = 'aceptar';
    } else if (accion == 'baja') {
        numeros.splice(idx,1);
        idx = (idx == numeros.length - 1) ? numeros.length - 1 : idx;
        document.getElementById('actual').value = numeros[idx];
        accion = 'normal';
    }
    orden = numeros.slice();
    document.getElementById('asc').value = orden.sort(compareForSortAsc);
    document.getElementById('desc').value = orden.sort(compareForSortDesc);
    mostrarDisplay();
}

function compareForSortAsc(a,b){
    return (a-b);
}
function compareForSortDesc(a,b){
    return (b-a);
}

function mostrarDisplay(){
    var disp = '';
    if (accion == 'normal') {
        for (var i = 0; i <= numeros.length - 1; i++) {
            disp += (i == idx) ? 'O&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
        }
    } else if (accion == 'alta') {
        if (idx != aux.length - 1) {
            for (var i = 0; i <= aux.length - 1; i++) {
                disp += (i == idx) ? '^&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
            }
        } else {
            for (var i = 0; i <= aux.length - 1; i++) {
                disp += (i == idx) ? '^&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
            }
        }
        document.getElementById('actual').value = 'idx.' + idx;
    } else if (accion == 'aceptar') {
        for (var i = 0; i <= numeros.length - 1; i++) {
            disp += (i == idx) ? 'o&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
        }
        accion = 'normal';
    } else if (accion == 'baja') {
        for (var i = 0; i <= numeros.length - 1; i++) {
            disp += (i == idx) ? 'X&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
        }
    }
    document.getElementById('disp').innerHTML = disp;
}