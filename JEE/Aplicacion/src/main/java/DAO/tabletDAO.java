package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import model.Estudiante;
import model.Tablets;
import model.TabletsR;

@Stateless
public class tabletDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(Tablets tabl) {
		em.persist(tabl);
	}
//------------------------------------------------
	public void insertTR(TabletsR tablR) {
		em.persist(tablR);
	}
	//---------------------------------------------
	public void update(Tablets  tabl) {
		em.merge(tabl);
	}
//----------------
	public void updateR(TabletsR  tablR) {
		em.merge(tablR);
	}
	public Tablets  read(int id) {
		Tablets  tabl=em.find(Tablets.class, id);
		return(tabl);
	}
	
	public void delete(int id) {
		Tablets tabl=em.find(Tablets.class, id);
		em.remove(tabl);
	}
	
	public List<Tablets> getList(){
		List<Tablets> listado= new ArrayList<Tablets>();
		String jpql ="SELECT tabl FROM Tablets tabl order by tabl.id ASC";
		Query query=em.createQuery(jpql, Tablets.class);
		listado=query.getResultList();
		return listado;	
	}
	
	//-----------------------------------------
	public Tablets read2(String codigo) {
		List<Tablets> listado= new ArrayList<Tablets>();
		String jpql ="SELECT tab FROM Tablets tab WHERE tab.nombre=?1";
		Query query=em.createQuery(jpql, Tablets.class);
		query.setParameter(1, codigo);
		listado=query.getResultList();
		

		Tablets t = listado.get(0);
		return t;	
	}
//-------------------------------------------
	public List<TabletsR> getListTabletsPres(){
		List<TabletsR> listado= new ArrayList<TabletsR>();
		String jpql ="SELECT tabl FROM TabletsR tabl ";
		Query query=em.createQuery(jpql, TabletsR.class);
		listado=query.getResultList();
		return listado;	
	}
//-------------------------------
	public List<Tablets> getListtVerTablet(String id){
		List<Tablets> listado= new ArrayList<Tablets>();
		
		String jpql ="SELECT tab FROM Tablets tab WHERE tab.nombre=?1";
		Query query=em.createQuery(jpql, Tablets.class);
		query.setParameter(1, id);
		listado=query.getResultList();
		return listado;	
	}
	
//------------------------------------------------------	
	public List<TabletsR> getListTabletReg(int id){
		List<TabletsR> listado= new ArrayList<TabletsR>();
		
		String jpql ="SELECT tab FROM Tablets tab WHERE tab.id=?1";
		Query query=em.createQuery(jpql, TabletsR.class);
		query.setParameter(1, id);
		listado=query.getResultList();
		return listado;	
	}
	//-----------------------------------------
	public TabletsR readRegistro(int id) {
		List<TabletsR> listado= new ArrayList<TabletsR>();
		String jpql ="SELECT tab FROM TabletsR tab WHERE tab.id=?1";
		Query query=em.createQuery(jpql, TabletsR.class);
		query.setParameter(1, id);
		listado=query.getResultList();
		TabletsR t = listado.get(0);
		return t;	
	}
	
	//-------------------------------------------------
	public TabletsR readRegistroEstudiantes(int id) {
		List<TabletsR> listado= new ArrayList<TabletsR>();
		String jpql ="SELECT tab FROM TabletsR tab WHERE tab.estudiante.id=?1";
		Query query=em.createQuery(jpql, TabletsR.class);
		query.setParameter(1, id);
		listado=query.getResultList();
		TabletsR t = listado.get(0);
		return t;	
	}	
	
/*public List<Tablets> getListCuentas(String cedula){
		
		List<Tablets> listado= new ArrayList<Tablets>();
		
		String jpql ="SELECT tabl FROM Tablets tabl WHERE tabl.persona.cedula= ?1";
		Query query=em.createQuery(jpql, Tablets.class);
		query.setParameter(1, cedula);
		listado=query.getResultList();
		
		return listado;
		
	}*/
}
