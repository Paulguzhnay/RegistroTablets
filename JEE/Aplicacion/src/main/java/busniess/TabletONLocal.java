package busniess;

import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.inject.Inject;

import DAO.tabletDAO;
import model.Tablets;
import model.TabletsR;

@Local
public interface TabletONLocal {
	
	public List <Tablets> getTablets();
	public void insertar(Tablets t)throws Exception;
	public void update(Tablets t)throws Exception;
	public void borrar(int id)throws Exception;
	public Tablets buscar(int id);
	public void insertarTR(TabletsR tR)throws Exception;
	public void updateR(TabletsR tR)throws Exception;
	public Tablets verificar(String codigo);
	public List <TabletsR> getTabletsPrestadas();
	public List <Tablets> getTabletsVerificada(String nombre);
	public TabletsR getListTabletsVerificada(int id);
	public TabletsR getListEstudiantesRegistro(int id);
}
