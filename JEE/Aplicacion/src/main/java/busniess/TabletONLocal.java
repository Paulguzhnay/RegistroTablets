package busniess;

import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.inject.Inject;

import DAO.tabletDAO;
import model.Tablets;

@Local
public interface TabletONLocal {
	
	public List <Tablets> getTablets();

}
