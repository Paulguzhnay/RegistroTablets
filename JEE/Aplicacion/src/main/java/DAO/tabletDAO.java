package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import model.Tablets;

@Stateless
public class tabletDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(Tablets tabl) {
		em.persist(tabl);
	}
	
	public void update(Tablets  tabl) {
		em.merge(tabl);
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
	
/*public List<Tablets> getListCuentas(String cedula){
		
		List<Tablets> listado= new ArrayList<Tablets>();
		
		String jpql ="SELECT tabl FROM Tablets tabl WHERE tabl.persona.cedula= ?1";
		Query query=em.createQuery(jpql, Tablets.class);
		query.setParameter(1, cedula);
		listado=query.getResultList();
		
		return listado;
		
	}*/
}
