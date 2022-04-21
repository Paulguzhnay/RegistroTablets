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

}
