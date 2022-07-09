import { DocenteWS } from "./docentews";
import { MateriaWS } from "./materiaws";
import { EstudianteWS } from "./estudiantews";
import { Tablet } from "./tablets";
export class RTablet{
	id:number=0;
    fecha : Date;

	observaciones:String ='';
	estado:String ='';
	estadoTxt:String='';
	docente: DocenteWS = new DocenteWS;
	materia: MateriaWS = new MateriaWS;
	estudiante: EstudianteWS = new EstudianteWS;
	tablet: Tablet = new Tablet;
}