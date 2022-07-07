package busniess;

import java.util.List;

import javax.ejb.Local;

import model.Docente;

@Local
public interface DocenteONLocal {

	public void insertar(Docente d) throws Exception ;
	public void update(Docente op);
	public List<Docente> getDocentes();
	public void delete(int id);
	public Docente buscarDocente(int id);
	
}

