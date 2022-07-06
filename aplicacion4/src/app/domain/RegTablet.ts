import { DocenteWS } from "./docentews";
import { MateriaWS } from "./materiaws";
export class RTablet{
    fecha : Date;

	estudiante:String ='';
	observaciones:String ='';
	estado:String ='';
	estadoTxt:String='';
	docente: DocenteWS = new DocenteWS;
	materia: MateriaWS = new MateriaWS;
	
}