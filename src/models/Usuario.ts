export class Usuario{

    correo: string;
    nombre_de_usuario: string;
    reputacion: number;
    grado_que_cursa: number;
    idu: number;

    constructor(correo, nombre_de_usuario, reputacion, grado_que_cursa, idu){
        this.correo = correo;
        this.nombre_de_usuario = nombre_de_usuario;
        this.reputacion = reputacion;
        this. grado_que_cursa = grado_que_cursa;
        this.idu =idu;

    }


}