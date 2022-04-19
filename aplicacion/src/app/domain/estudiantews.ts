import { Materia } from "./materia";
import { Tablet } from "./tablets";

export class EstudianteWS{
    nombre:string='';
    apellido:string='';
    carrera:string='';
    asignatura:string='';
    periodoAcademico:string='';


    materia: Materia = new Materia;
    tablet: Tablet = new Tablet;

}