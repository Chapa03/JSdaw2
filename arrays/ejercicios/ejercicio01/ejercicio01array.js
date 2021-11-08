let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//copia del array para utilizar en el display
let aux = numeros.slice();
//copia del array para ordenar ascendente y descendente
let orden = numeros.slice();
var idx = 0;
var accion = 'normal';

//ordenar el array en pantalla
document.getElementById('asc').value = orden.sort(compareForSortAsc);
document.getElementById('desc').value = orden.sort(compareForSortDesc);

//añadir un elemento más a la copia para el display
aux.push(0);

document.getElementById('actual').value = numeros[idx];
mostrarDisplay();

function primero() {
    idx = 0;
    document.getElementById('actual').value = numeros[idx];
    mostrarDisplay();
}

function anterior() {
    /**
     * si la acción es 'alta' el array que itera es el auxiliar
     * para simular la posición del nuevo elemento entre los
     * ya exixtentes del array
     */
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
    /**
     * si la acción es 'alta' el array que itera es el auxiliar
     * para simular la posición del nuevo elemento entre los
     * ya exixtentes del array
     */
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
    /**
     * Si la acción es 'alta', el valor de idx será el último
     * índice del array auxiliar, sino, el último índice del
     * array numeros
     */
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
    //copia del array original y orden por pantalla ascendente y descendente
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

/**
 * Maneja toda la lógica del display moviendo el cursor
 * inactivo 'O', el de alta '^', el de nuevo elemento 'o'
 * o el de baja 'X' por todos los demás elementos '|'.
 * En el alta, añade un elemento más utilizando el cursor '^'
 * simulando la posición en la que quedaría el nuevo elemento
 * dentro del array.
 * En la baja, señala la posición del elemento que está seleccionado
 * para borrarse.
 */
function mostrarDisplay(){
    var disp = '';
    if (accion == 'normal') {
        for (var i = 0; i <= numeros.length - 1; i++) {
            disp += (i == idx) ? 'O&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
        }
    } else if (accion == 'alta') {
        for (var i = 0; i <= aux.length - 1; i++) {
            //Pinta ^ para el índice, y | para el resto de elementos
            disp += (i == idx) ? '^&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
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