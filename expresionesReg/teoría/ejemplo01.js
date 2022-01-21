function comprobar(opcion) {
    var cadenaUno = document.getElementById('mainL').value;
    switch (opcion) {
        case 0:
            var str0 = document.getElementById('a').value;
            var exp0 = new RegExp(str0);
            document.getElementById('res0').innerHTML = (exp0.test(cadenaUno)) ? "Coincide" : "No coincide";
            break;
        case 1:
            var str1 =document.getElementById('a').value;
            var strN1 = document.getElementById('aN').value;
            var strExp = "[" + str1 + "]{" + strN1 + "}";
            var exp1 = new RegExp(strExp);
            document.getElementById('res1').innerHTML = (exp1.test(cadenaUno)) ? "Coincide" : "No coincide";
            break;
    }
}