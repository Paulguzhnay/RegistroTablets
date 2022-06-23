package busniess;

import java.util.Iterator;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ejb.Stateless;
import javax.inject.Inject;


import DAO.UsuarioDAO;
import model.*;
import javax.persistence.Query;


@Stateless
public class UsuarioON implements UsuarioONLocal {

	@Inject
	private UsuarioDAO  daousuario;
	
	public void insertar(Usuario u) throws Exception  {
		daousuario.insert(u);
	
	}
	
	/*public void eliminar(int id) throws Exception{
		//daousuario.delete(0);
		Usuario us =daousuario.read(u.getId());
		if(us==null)
			System.out.println("Metodo de exception");
		else
			daousuario.delete(null);;
	}
*/	
	public List<Usuario> getClientes() {
		return daousuario.getList();
	}

	@Override
	public void eliminar(Usuario u) throws Exception {
		// TODO Auto-generated method stub
		
	}
	
	
	public List <Usuario> getUsuarios(String correo, String password){
		return daousuario.getAdmin(correo, password);
	}
	
	/*public Usuario buscarUsuario(String correo, String password) {
		List<Usuario> u = daousuario.getAdmin(correo, password);
		List<Usuario>usuarios = daousuario.getUsuario(correo);
		
 
			//condicional para devolcer un objeto persona
			//siempre y cunedo los datos correspondan
		
			if(u != null & u.get(0).getPassword().equals(password)) {
				//validacion de los 2 campos
				return (Usuario) u;	
			}		
			return null;
		}
	*/
	
	
	
	
}
	

