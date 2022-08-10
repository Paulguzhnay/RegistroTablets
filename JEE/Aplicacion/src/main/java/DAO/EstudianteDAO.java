package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import model.Estudiante;
import model.TabletsR;

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

	public List<Estudiante> getListEst(int id){
		List<Estudiante> listado= new ArrayList<Estudiante>();
		String jpql ="SELECT est FROM Estudiante est WHERE est.materia.id=?1";
		Query query=em.createQuery(jpql, Estudiante.class);
		query.setParameter(1, id);
		listado=query.getResultList();
		return listado;	
	}

//----------------------------
	public List<Estudiante> getListEstVerTablet(int id){
		List<Estudiante> listado= new ArrayList<Estudiante>();
		System.out.println("DAO "+id);
		String jpql ="SELECT est FROM Estudiante est WHERE est.id=?1";
		Query query=em.createQuery(jpql, Estudiante.class);
		query.setParameter(1, id);
		listado = query.getResultList();
		return listado;	
	}

	//-----------------------------------------------------
	public List<TabletsR> getListTabletRegistro(int id){
		List<TabletsR> listado= new ArrayList<TabletsR>();
		String jpql ="SELECT tabr FROM TabletsR tabr WHERE tabr.estudiante.id=?1";
		Query query=em.createQuery(jpql, TabletsR.class);
		query.setParameter(1, id);
		listado = query.getResultList();
		return listado;	
	}
	
	//--------------------------------------------------------
	
	public List<Estudiante> obtenerTabletIDEstudiante(int id){
		List<Estudiante> listado= new ArrayList<Estudiante>();
		String jpql ="SELECT est FROM Estudiante est WHERE est.id=?1";
		Query query=em.createQuery(jpql, Estudiante.class);
		query.setParameter(1, id);
		listado = query.getResultList();
		return listado;	
	}
	
}
