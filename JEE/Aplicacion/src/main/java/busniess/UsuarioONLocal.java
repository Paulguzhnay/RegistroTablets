package busniess;

import java.util.List;

import javax.ejb.Local;

import model.Usuario;

@Local
public interface UsuarioONLocal {

	public void insertar(Usuario u) throws Exception ;
	public void eliminar(Usuario u) throws Exception ;
	public List<Usuario> getClientes() ;
//	public Usuario buscarUsuario(String correo, String password);
	//la lista llamrla desde el UsuarioON
	public List <Usuario> getUsuarios(String correo, String password);
}

