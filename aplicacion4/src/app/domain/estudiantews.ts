import { MateriaWS } from "./materiaws";
import { Tablet } from "./tablets";

export class EstudianteWS{
    id: number=0;
    nombre:string='';
    apellido:string='';
    carrera:string='';
    asignatura:string='';
    periodoAcademico:string='';


    materia: MateriaWS = new MateriaWS;
    tablet: Tablet = new Tablet;

}