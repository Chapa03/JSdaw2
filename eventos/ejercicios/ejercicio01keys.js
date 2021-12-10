window.onload = function() {
    document.getElementById('texto').onkeydown = function () {document.getElementById('down').innerHTML = document.getElementById('texto').value}
    document.getElementById('texto').onkeypress = function () {document.getElementById('press').innerHTML = document.getElementById('texto').value}
    document.getElementById('texto').onkeyup = function () {document.getElementById('up').innerHTML = document.getElementById('texto').value}
    document.getElementById('texto').oninput = function () {document.getElementById('input').innerHTML = document.getElementById('texto').value}
    document.getElementById('texto').onchange = function () {document.getElementById('change').innerHTML = document.getElementById('texto').value}
}