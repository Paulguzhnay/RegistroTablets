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
	
	public void delete(int id) {
		daoestudiante.delete(id);
	}

	public List<Estudiante> getEstudiantes(){
		return daoestudiante.getList();
	}
	
	public List<Estudiante> getEstudiantesR(int id){
		return daoestudiante.getListEst(id);
	}
	
	public Estudiante buscarEstudiante(int id) {
		return daoestudiante.read(id);
	}
	
	public List<Estudiante> verficarTabletEst(int id) {
		System.out.println("ON "+id);
		return daoestudiante.getListEstVerTablet(id);
	}	

	public List<TabletsR> verficarTabletEstReg(int id) {
		return daoestudiante.getListTabletRegistro(id);
	}
	
	
	public List<Estudiante> TabletEstudianteRegistrada(int id) {
		System.out.println("ON "+id);
		return daoestudiante.obtenerTabletIDEstudiante(id);
	}	

}
