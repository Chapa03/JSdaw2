var fechaHoy = new Date();
var fecha1 = new Date("May 14, 2019");
var fecha2 = new Date("May 14, 2019 20:14:23");
var fecha3 = new Date(2019,4,14);
var fecha4 = new Date(2019,4,14,20,14,23);

var dia = fecha4.getDate();
var mes = fecha4.getMonth();
var anio = fecha4.getFullYear();
var horas = fecha4.getHours();
var minutos = fecha4.getMinutes();
var segundos = fecha4.getSeconds();

var fechaNueva = new Date(anio, mes, dia, horas, minutos, segundos);

document.write(fechaHoy + "<br/>");
document.write(fecha1 + "<br/>");
document.write(fecha2 + "<br/>");
document.write(fecha3 + "<br/>");
document.write(fecha4 + "<br/>");

document.write(fechaNueva);