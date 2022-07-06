import { DocenteWS } from "./docentews";
import { MateriaWS } from "./materiaws";
import { EstudianteWS } from "./estudiantews";
export class RTablet{
    fecha : Date;

	observaciones:String ='';
	estado:String ='';
	estadoTxt:String='';
	docente: DocenteWS = new DocenteWS;
	materia: MateriaWS = new MateriaWS;
	estudiante: EstudianteWS = new EstudianteWS;
	
}