package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;


import model.Usuario;

@Stateless
public class UsuarioDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(Usuario us) {
		em.persist(us);
	}
	
	public void update(Usuario us) {
		em.merge(us);
	}
	
	public Usuario read(int id) {
		Usuario  usu=em.find(Usuario.class, id);
		return usu;
	}
	
	public void delete(int id) {
		Usuario u =em.find(Usuario.class, id);
		em.remove(u);
	}
	
	public List<Usuario> getList(){
		
		List<Usuario> listado= new ArrayList<Usuario>();
		
		String jpql ="SELECT us FROM Usuario us";
		Query query=em.createQuery(jpql, Usuario.class);
		listado=query.getResultList();
		return listado;
		
	}
	public Usuario readAdmin(String correo) {
		Usuario p=em.find(Usuario.class, correo);
		return p;
	}
	
public List<Usuario> getAdmin(String correo, String password){
		
		List<Usuario> listado= new ArrayList<Usuario>();
		String jpql ="SELECT us FROM Usuario us WHERE us.correo=?1 AND us.password=?2";
		
		Query query=em.createQuery(jpql, Usuario.class);
		query.setParameter(1, correo);
		query.setParameter(2, password);
		listado=query.getResultList();
		System.out.println("listado +"+listado);
		return listado;
		
	}
	
/*
public List<Usuario> getUsuario(String correo){
	
	List<Usuario> listado= new ArrayList<Usuario>();
	String jpql ="SELECT us FROM Usuario us"
				+ "WHERE us.correo=?1";
	Query query=em.createQuery(jpql, Usuario.class);
	query.setParameter(1, correo);
	listado=query.getResultList();
	return listado;
	
}*/
}
