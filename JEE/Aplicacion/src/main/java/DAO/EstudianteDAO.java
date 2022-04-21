package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import model.Estudiante;

@Stateless
public class EstudianteDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(Estudiante est) {
		em.persist(est);
	}
	
	public void update(Estudiante  est) {
		em.merge(est);
	}
	
	public Estudiante  read(int id) {
		Estudiante  est=em.find(Estudiante.class, id);
		return(est);
	}
	
	public void delete(int id) {
		Estudiante est=em.find(Estudiante.class, id);
		em.remove(est);
	}
	
	public List<Estudiante> getList(){
		
		List<Estudiante> listado= new ArrayList<Estudiante>();
		
		String jpql ="SELECT est FROM Estudiante est";
		Query query=em.createQuery(jpql, Estudiante.class);
		listado=query.getResultList();
		
		return listado;
		
	}
}
