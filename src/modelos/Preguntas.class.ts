export class Preguntas{

    titulo : string;
    idp: number;
    votos: number;
    fecha: Date;
    descripcion: string;
    asignatura: string;
  
    constructor(titulo, idp, votos, fecha, descripcion){
        this.titulo = titulo;
        this.idp = idp;
         
    }


    // Compareto para ordenar alfabeticamente las preguntas por asignatura    
    compareTo(obj : Preguntas){
        if(this.asignatura.charAt[0] <
          obj.asignatura.charAt[0])
            return 1;
            
        else if( this.asignatura.charAt[0] >
                 obj.asignatura.charAt[0])
            return -1;

            return 0;
    }
}
