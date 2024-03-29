package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import model.Materia;

@Stateless
public class MateriaDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(Materia mat) {
		em.persist(mat);
	}
	
	public void update(Materia  mat) {

		em.merge(mat);
	}
	
	public Materia  read(int id) {
		Materia  mat=em.find(Materia.class, id);
		return(mat);
	}
	
	public void delete(int id) {
		Materia mat=em.find(Materia.class, id);
		em.remove(mat);
	}
	
	public List<Materia> getList(String nombreM){
		
		List<Materia> listado= new ArrayList<Materia>();
		
		String jpql ="SELECT mat FROM Materia mat WHERE mat.nombre=?1 ";
		Query query=em.createQuery(jpql, Materia.class);
		query.setParameter(1, nombreM);
		listado=query.getResultList();
		
		return listado;
		
	}

	public List<Materia> getListaMateriaDocente(int id){
		List<Materia> listado= new ArrayList<Materia>();
		String jpql ="SELECT mat FROM Materia mat WHERE mat.docente.id=?1";
		Query query=em.createQuery(jpql, Materia.class);
		query.setParameter(1, id);
		listado=query.getResultList();		
		return listado;
	}
	
	
	public List<Materia> getListMateria(){
		
		List<Materia> listado= new ArrayList<Materia>();
		String jpql ="SELECT mat FROM Materia mat ";
		Query query=em.createQuery(jpql, Materia.class);
		listado=query.getResultList();		
		return listado;
		
	}

	public List<Materia> getMateriaDatos(int id){
		
		List<Materia> listado= new ArrayList<Materia>();
		
		String jpql ="SELECT mat FROM Materia mat WHERE mat.id=?1 ";
		Query query=em.createQuery(jpql, Materia.class);
		query.setParameter(1, id);
		listado=query.getResultList();
		
		return listado;
		
	}

}

