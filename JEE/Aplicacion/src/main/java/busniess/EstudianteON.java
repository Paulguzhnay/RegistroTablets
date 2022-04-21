package busniess;


import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import DAO.DocenteDAO;
import DAO.*;
import model.*;

@Stateless
public class EstudianteON implements EstudianteONLocal{

	@Inject
	private EstudianteDAO  daoestudiante;
	
	public void insertar(Estudiante est) throws Exception  {
		daoestudiante.insert(est);
	
	
	}
	
	public void update(Estudiante op) {
		daoestudiante.update(op);
	}
	

	public List<Estudiante> getEstudiantes(){
		return daoestudiante.getList();
	}
	
}
