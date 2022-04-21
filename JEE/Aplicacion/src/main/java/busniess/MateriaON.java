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
}
