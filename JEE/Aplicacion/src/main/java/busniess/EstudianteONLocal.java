package busniess;


import java.util.List;

import javax.ejb.Local;

import model.Docente;
import model.Estudiante;

@Local
public interface EstudianteONLocal {
	public void insertar(Estudiante est) throws Exception;
	public void update(Estudiante op);
	public List<Estudiante> getEstudiantes();
	public List<Estudiante> getEstudiantesR(int id);
	public void delete(int id);
	public Estudiante buscarEstudiante(int id);
}

