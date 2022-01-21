var opcion = suscripcionForm.boletin;
var intereses = suscripcionForm["intereses[]"];

function boletinSi() {
    for (i in intereses) {
        intereses[i].disabled = !opcion.checked;
    }
}