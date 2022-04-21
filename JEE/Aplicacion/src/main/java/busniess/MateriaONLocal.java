package busniess;


import java.util.List;

import javax.ejb.Local;

import model.Docente;
import model.Estudiante;
import model.Materia;

@Local
public interface MateriaONLocal {
	public void insertar(Materia mat) throws Exception  ;
	public List <Materia> getMateria(String nombreM);
}

