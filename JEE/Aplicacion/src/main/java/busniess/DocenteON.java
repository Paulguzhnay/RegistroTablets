package busniess;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import DAO.DocenteDAO;
import model.*;

@Stateless
public class DocenteON implements DocenteONLocal{

	@Inject
	private DocenteDAO  daodocente;
	
	public void insertar(Docente d) throws Exception  {
		daodocente.insert(d);
	}
	
	public void update(Docente op) {
		daodocente.update(op);
	}
	

	public List<Docente> getDocentes(){
		return daodocente.getList();
	}
	
	
	
}
