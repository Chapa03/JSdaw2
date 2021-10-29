function mostrar() {
    var mes = '<table border="1"><tr><td>Lunes</td><td>Martes</td><td>Miércoles</td><td>Jueves</td><td>Viernes</td><td>Sábado</td><td>Domingo</td></tr><tr>';
    var dias = dias = parseInt(document.getElementById('mes').value);

    for (var i = 1; i <= dias; i++) {
        if (i % 7 == 0) {
            mes += '<th>' + i + '</th></tr><tr>';
        } else {
            mes += '<th>' + i + '</th>';
        }
    }
    mes += '</tr><table>'
    document.getElementById('calendario').innerHTML = mes;
}


