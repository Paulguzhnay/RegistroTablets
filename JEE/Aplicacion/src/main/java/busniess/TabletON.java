package busniess;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import DAO.tabletDAO;
import model.Tablets;
import model.TabletsR;
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
	
	public void insertarTR(TabletsR tR)throws Exception{
		daoTablet.insertTR(tR);
	}
	
	public void update(Tablets t)throws Exception{
		daoTablet.update(t);
	}
	public void updateR(TabletsR tR)throws Exception{
		daoTablet.updateR(tR);
	}	
	public void borrar(int id)throws Exception{
		daoTablet.delete(id);
	}
	
	public Tablets buscar(int id) {
		return daoTablet.read(id);
	}
	
	public Tablets verificar(String codigo) {
		return daoTablet.read2(codigo);
	}
//--------------------
	public List <TabletsR> getTabletsPrestadas(){
		return daoTablet.getListTabletsPres();
	}
//-----------
	public List <Tablets> getTabletsVerificada(String nombre){
		return daoTablet.getListtVerTablet(nombre);
	}
	//-----------
		public TabletsR getListTabletsVerificada(int id){
			return daoTablet.readRegistro(id);
		}
		//-----------
		public TabletsR getListEstudiantesRegistro(int id){
			return daoTablet.readRegistroEstudiantes(id);
		}	

	
}
