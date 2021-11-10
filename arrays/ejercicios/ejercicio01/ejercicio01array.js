var numeros = [1, 33, 7, 4, 100, 6, -2, 0, 10, -1, 14, 48];
//copia del array para utilizar en el display
var aux = numeros.slice();
//copia del array para ordenar ascendente y descendente
var orden = numeros.slice();
var idx = 0;
var accion;
var cont = 0;

setAccion('normal');

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
    setAccion('alta');
    cambiarVista(false, 'alta', false, false, true, false);
    mostrarDisplay();
    document.getElementById('actual').value = 'idx.' + idx;
}

function baja() {
    setAccion('baja');
    cambiarVista(false, 'baja', false, false, true, false);
    mostrarDisplay();
}

function modificar() {
    setAccion('modificar');
    cambiarVista(false, 'modificar', false, false, true, false);
    mostrarDisplay();
}

function listar() {
    var ventanaListar = window.open("", "Visor del array", "top=100,left=250,width=350,height=250");
    orden = numeros.slice();
    var codigo = '<body>'
                + '<label for="n">Array original:</label>'
                + '<br/>'
                + '<input type="text" id="n" size="40" disabled="disabled"/>'
                + '<br/>'
                + '<br/>'
                + '<label for="a">Orden ascendente:</label>'
                + '<br/>'
                + '<input type="text" id="a" size="40" disabled="disabled"/>'
                + '<br/>'
                + '<br/>'
                + '<label for="d">Orden descendente:</label>'
                + '<br/>'
                + '<input type="text" id="d" size="40" disabled="disabled"/>'
                + '<br/>'
                + '<br/>'
                + '<input type="button" id="btn" onclick="window.close();" value="Cerrar ventana"/>'
                + '<script>'
                + 'document.getElementById("n").value="' + numeros + '";'
                + 'document.getElementById("a").value="' + orden.sort(compareForSortAsc) + '";'
                + 'document.getElementById("d").value="' + orden.sort(compareForSortDesc) + '";'
                + '</script>'
                + '</body>';

    ventanaListar.document.open();
    ventanaListar.document.write(codigo);
    ventanaListar.document.close();
}

function aceptar() {
    var numero = parseInt(document.getElementById('actual').value);
    var respuesta;

    if (Number.isInteger(numero)){
        if (accion == 'alta'){
            respuesta = confirm('¿Deseas dar de alta el valor [' + idx + '] - ' + numero + '?');
            if (respuesta){
                if (idx <= numeros.length){
                    numeros.splice(idx,0,numero);
                } else {
                    numeros.push(numero);
                }
                aux.push(0);
            } else {
                document.getElementById('actual').value = numeros[idx];
                mostrarDisplay();
            }
            setAccion('normal');
        } else if (accion == 'baja') {
            respuesta = confirm('¿Deseas dar de baja el valor [' + idx + '] - ' + numero + '?');
            if (respuesta) {
                numeros.splice(idx,1);
                idx = (idx == numeros.length - 1) ? numeros.length - 1 : idx;
                aux.pop();
            } else {
                mostrarDisplay();
            }
            document.getElementById('actual').value = numeros[idx];
            setAccion('normal');
        } else if (accion == 'modificar') {
            respuesta = confirm('¿Deseas modificar el valor de [' + idx + '] - ' + numeros[idx] + ' por ' + numero + '?');
            if (respuesta) {
                numeros[idx] = numero;
            } else {
                mostrarDisplay();
            }
            document.getElementById('actual').value = numeros[idx];
            setAccion('normal');
        }
        //copia del array original y orden por pantalla ascendente y descendente
        orden = numeros.slice();
        document.getElementById('asc').value = orden.sort(compareForSortAsc);
        document.getElementById('desc').value = orden.sort(compareForSortDesc);
        cambiarVista(true, 'alta', false, true, false, false);
        advertencia('');
    } else {
        advertencia('Introduce un número entero.');
    }
    mostrarDisplay();
}

function cancelar() {
    setAccion('normal');
    cambiarVista(false, "baja", false, true, false, false);
    advertencia('');
    mostrarDisplay();
    document.getElementById('actual').value = numeros[idx];
}

function compareForSortAsc(a,b){
    return (a-b);
}
function compareForSortDesc(a,b){
    return (b-a);
}

function advertencia(texto) {
    document.getElementById('adv').innerHTML = texto;
}

function setAccion(s) {
    accion = s;
}

/**
 * Permite cambiar la visibilidad de los elementos y botones
 * de la aplicación.
 * 
 * @param {boolean} actual Cambia el valor disabled del input donde se muestra el número actual del array.
 * @param {String} etiqueta id del elemento que se quiere evitar cambiar
 * @param {boolean} etiquetaBool Cambia el valor disabled del boton de la función actual (alta, baja,...).
 * @param {boolean} botones Cambia el valor hidden de los botones Aceptar y Cancelar (true por defecto).
 * @param {boolean} funciones Cambia el valor disabled de los botones del resto de funciones (alta, baja,...).
 * @param {boolean} navegador Cambia el valor disabled de los botones de navegación.
 */
function cambiarVista(actual, etiqueta, etiquetaBool, botones, funciones, navegador) {
    document.getElementById('alta').disabled = funciones;
    document.getElementById('baja').disabled = funciones;
    document.getElementById('modificar').disabled = funciones;
    document.getElementById('listado').disabled = funciones;
    document.getElementById('actual').disabled = actual;
    
    document.getElementById(etiqueta).disabled = etiquetaBool;

    document.getElementById('btn').hidden = botones;
    document.getElementById('btnCancel').hidden = botones;

    document.getElementById('primero').disabled = navegador;
    document.getElementById('anterior').disabled = navegador;
    document.getElementById('siguiente').disabled = navegador;
    document.getElementById('ultimo').disabled = navegador;
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
        setAccion('normal');
    } else if (accion == 'baja') {
        for (var i = 0; i <= numeros.length - 1; i++) {
            disp += (i == idx) ? 'X&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
        }
    } else if (accion == 'modificar') {
        for (var i = 0; i <= numeros.length - 1; i++) {
            disp += (i == idx) ? '*&nbsp;&nbsp;' : '|&nbsp;&nbsp;';
        }
    }
    document.getElementById('disp').innerHTML = disp;
}