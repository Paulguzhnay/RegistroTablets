package busniess;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import DAO.tabletDAO;
import model.Tablets;

@Stateless
public class TabletON implements TabletONLocal {
	
	@Inject
	private tabletDAO daoTablet;
	
	public List <Tablets> getTablets(){
		return daoTablet.getList();
	}
	
	public void insertar(Tablets t)throws Exception{
		daoTablet.insert(t);
	}
	public void update(Tablets t)throws Exception{
		daoTablet.update(t);
	}
	
	public void borrar(int id)throws Exception{
		daoTablet.delete(id);
	}
	
	public Tablets buscar(int id) {
		return daoTablet.read(id);
	}

}
