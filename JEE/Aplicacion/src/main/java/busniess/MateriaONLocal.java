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
	public void update(Materia mat) ;
	public List <Materia> getListMateria();
	public void eliminar(int id);
	public Materia getMateriaDatos(int id);
	public List <Materia> getListMateriaDocente(int id);
	
}

