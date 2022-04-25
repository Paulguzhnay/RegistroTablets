package busniess;


import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import DAO.DocenteDAO;
import DAO.*;
import model.*;

@Stateless
public class MateriaON implements MateriaONLocal{

	
	@Inject
	private MateriaDAO  daoMateria;
	
	
	public void insertar(Materia mat) throws Exception  {
		daoMateria.insert(mat);
	}	
	
	
	public List <Materia> getMateria(String nombreM){
		return daoMateria.getList(nombreM);
	}

	public  Materia getMateriaDatos(int id){		
		return daoMateria.read(id);
	}

	
	public List <Materia> getListMateria(){
		return daoMateria.getListMateria();
	}
	
	public void update(Materia mat) {
		daoMateria.update(mat);
	}
	public void eliminar(int id) {
		daoMateria.delete(id);
	}

}
