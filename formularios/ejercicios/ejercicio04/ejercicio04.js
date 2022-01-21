var opcion = suscripcionForm.boletin;
var intereses = suscripcionForm["intereses[]"];

function boletinSi() {
    if (opcion.value == "yes") {
        for (var i = 0; i < intereses.length; i++) {
            intereses[i].disabled = false;
        }
    }
}

function boletinNo() {
    if (opcion.value == "no") {
        for (var i = 0; i < intereses.length; i++) {
            intereses[i].disabled = true;
        }
    }
}