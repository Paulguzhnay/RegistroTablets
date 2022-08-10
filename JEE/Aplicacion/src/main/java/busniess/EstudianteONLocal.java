package busniess;


import java.util.List;

import javax.ejb.Local;

import model.Docente;
import model.Estudiante;
import model.TabletsR;

@Local
public interface EstudianteONLocal {
	public void insertar(Estudiante est) throws Exception;
	public void update(Estudiante op);
	public List<Estudiante> getEstudiantes();
	public List<Estudiante> getEstudiantesR(int id);
	public void delete(int id);
	public Estudiante buscarEstudiante(int id);
	public List<Estudiante> verficarTabletEst(int id);
	public List<TabletsR> verficarTabletEstReg(int id);
	public List<Estudiante> TabletEstudianteRegistrada(int id);
}

