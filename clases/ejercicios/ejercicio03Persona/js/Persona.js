class Persona {
    constructor(nombre, apellido, direccion, fechaNac, genero, cP) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._direccion = direccion;
        this._fechaNac = fechaNac;
        this._genero = genero;
        this._cP = cP;
    }

    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get direccion() {
        return this._direccion;
    }
    get fechaNac() {
        return this._fechaNac;
    }
    get genero() {
        return this._genero;
    }
    get cP() {
        return this._cP;
    }

    set nombre(s) {
        this._nombre = s;
    }
    set apellido(s) {
        this._apellido = s;
    }
    set direccion(s) {
        this._direccion = s;
    }
    set fechaNac(d) {
        this._fechaNac = d;
    }
    set genero(s) {
        this._genero = s;
    }
    set cP(n) {
        this._cP = n;
    }

    edad() {
        var sistema=new Date();
	            var nac = new Date(this.fechaNac.getFullYear(),this.fechaNac.getMonth()-1,this.fechaNac.getDate());
	            var edad = 0;
	            edad = sistema.getFullYear()-nac.getFullYear();
                if(nac.getMonth()==sistema.getMonth()){
                    if(nac.getDate()>sistema.getDate()){
                        edad--;
                    }
	            }
	            else if(nac.getMonth()>sistema.getMonth()){
	                edad--;
	            }
                return edad;
    }

    listarPersona(){
        var salida = "";
        salida = "<b>Nombre:</b> "+this.prefijo()+" "+this.nombre+"<br/><b>Apellidos:</b> "+this.apellidos+"<br/><b>Direccion:</b> "+this.direccion+"<br/><b>Fecha de nacimiento:</b> "+this.fechaNac.getDate()+"/"+this.fechaNac.getMonth()+"/"+this.fechaNac.getFullYear()+"<br/><b>Edad:</b> "+this.edad()+"<br/><b>Genero:</b> "+this.genero+"<br/><b>Codigo Postal:</b> "+this.codigoP;
        return salida;
    }

    static mostrarPersonas(listaPersonas){
        var ventana = window.open("","TablaPersonas","height=400,width=600,top=200,left=400");
        ventana.document.open();
        ventana.document.write('<table border="1">');
        ventana.document.write('<tr><th>Nombre</th><th>Apellidos</th><th>Direccion</th><th>Fecha de nacimiento</th><th>Edad</th><th>Genero</th><th>Codigo Postal</th><tr>');
        for (var persona of listaPersonas){
            ventana.document.write('<tr><td>'+persona.prefijo()+" "+persona.nombre+"</td><td>"+persona.apellidos+"</td><td>"+persona.direccion+"</td><td>"+persona.fechaNac.toDateString()+"</td><td>"+persona.edad()+"</td><td>"+persona.genero+"</td><td>"+persona.codigoP+"</td>");
        }
        ventana.document.write('</table>');    
        ventana.document.close();
    }

}