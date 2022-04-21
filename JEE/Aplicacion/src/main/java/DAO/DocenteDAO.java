package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import model.Docente;

@Stateless
public class DocenteDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(Docente doc) {
		em.persist(doc);
	}
	
	public void update(Docente  doc) {
		em.merge(doc);
	}
	
	public Docente  read(int id) {
		Docente  doc=em.find(Docente.class, id);
		return(doc);
	}
	
	public void delete(int id) {
		Docente doc=em.find(Docente.class, id);
		em.remove(doc);
	}
	
	public List<Docente> getList(){
		
		List<Docente> listado= new ArrayList<Docente>();
		
		String jpql ="SELECT doc FROM Docente doc";
		Query query=em.createQuery(jpql, Docente.class);
		listado=query.getResultList();
		
		return listado;
		
	}

}

