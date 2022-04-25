package services;

import java.awt.PageAttributes.MediaType;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.PATCH;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import busniess.DocenteONLocal;
import busniess.EstudianteONLocal;
import busniess.MateriaONLocal;
import busniess.UsuarioONLocal;

import busniess.TabletONLocal;
import model.Docente;
import model.*;

@Path("contactos")
public class ClientesREST {
	
	@Inject
	private DocenteONLocal docenteLocal;
	
	@Inject
	private TabletONLocal tabletON;
	
	@Inject
	private EstudianteONLocal estudianteLocal;
	
	@Inject
	private MateriaONLocal materiaLocal;
	
	@Inject
	private UsuarioONLocal usuarioLocal;
	
	
	List<Materia>listMateria = new java.util.ArrayList<Materia>();
	
	Docente d = new Docente();
	Estudiante e = new Estudiante();
	Materia m = new Materia();
	Usuario u = new Usuario();
	
//	Producto p = new Producto();


	@POST
	@Path("RegistroD")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String guardarDocente(Docente d) {
			System.out.println("********************************");
			System.out.println(d+"********");
			try {
				docenteLocal.insertar(d);
				return "OK";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		
		return "no felicidades";
	}
	//ESTUDIANTE
	

	@POST
	@Path("RegistrarE")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String guardarEstudiante(Estudiante est) {
		
			listMateria=materiaLocal.getMateria(est.getAsignatura());
			m.setId(listMateria.get(0).getId());;
			m.getId();
			est.setMateria(m);
			try {
				estudianteLocal.insertar(est);
				return "OK";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		
		return "no felicidades";
	}
	//Ingresar Materia
	@POST
	@Path("RegistrarM")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String guardarMateria(Materia mat) {
			
		
		int id  = mat.getDocente().getId();
		System.out.println(id);	
		
		System.out.println("/////////////////////");
		System.out.println(mat);
		try {
				materiaLocal.insertar(mat);
				return "OK";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		
		return "no felicidades";
	}	
	
	
	//Listar Materia
	
	@GET
	@Path("ListarMateria")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<Materia> getMateria(){
		List<Materia> materia = materiaLocal.getListMateria();
		System.out.println(materia);
		return materia;
	}
	
	
	//Actualizar Materia
	@POST
	@Path("actualizarMateria")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void updateMateria(Materia mat) {
		System.out.println("hola");
		System.out.println("***"+mat);
		System.out.println("hola");
		materiaLocal.update(mat);
	}
	
	
	
	//Eliminar Materia
	@DELETE
	@Path("eliminarMateria")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void eliminarMateria(@QueryParam("id") int id ) {
		System.out.println("hola"+id);
		materiaLocal.eliminar(id);
	}
//Buscar Materia
	
	@GET
	@Path("ListarMaterias")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Materia getMateriaID(@QueryParam("id") int id){
		Materia materia = materiaLocal.getMateriaDatos(id);
		System.out.println("-----------------------*********************");
		System.out.println(materia);
		return materia;
	}
	
	//JAPON
	
	@POST
	@Path("RegistroU")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String guardarUsuario(Usuario usuario) {
			
			System.out.println(usuario);
			try {
				usuarioLocal.insertar(usuario);
				System.out.println("Entro en el POST PARA GUARDAR");
				return "OK";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		
		return "no felicidades";
	}
	
	@GET
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<Usuario> getUsuarios(){
		List<Usuario> usuarios = usuarioLocal.getClientes();
		System.out.println(usuarios);
		return usuarios;
	}
	
	
	/////////////////////////////////////////////////////////
	
	
	
	
	//Joseph 
	@Inject
	private DocenteONLocal docentesON;
	@Inject
	private EstudianteONLocal estudiantesON;
	
	//Estudiantes
	
	@POST
	@Path("ingresarEstudiante")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String ingresarEstudiante(Estudiante persona) {
		try {
			estudiantesON.insertar(persona);
			return "Ok";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Error";
		}
	}
	
	@GET
	@Path("estudiantes")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<Estudiante> getEstudiantes(){
		return estudiantesON.getEstudiantes();
	}
	
	@POST
	@Path("actualizarEstudiante")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void updateEstudiante(Estudiante op) {
		estudiantesON.update(op);
	}
	
	//Docentes
	@POST
	@Path("ingresarDocente")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String ingresarDocente(Docente persona) {
		try {
			docentesON.insertar(persona);
			return "Ok";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Error";
		}
	}
	
	@GET
	@Path("docentes")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<Docente> getDocentes(){
		return docentesON.getDocentes();
	}
	
	@POST
	@Path("actualizarDocente")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void updateDocente(Docente op) {
		docentesON.update(op);
	}
	
	////----------------- Tablets----------
	@GET
	@Path("Tablets")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<Tablets> getTablets(){
		
		List<Tablets> tab=new ArrayList<Tablets>();
		tab=tabletON.getTablets();
		
		return tab;
	}
	
	@GET
	@Path("BuscarTablet")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Tablets buscar(@QueryParam("id") int id){
		
		Tablets tab=new Tablets();
		tab=tabletON.buscar(id);
		return tab;
	}
	
	@POST
	@Path("RegistroTablet")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String guardarDocente(Tablets t) {
			System.out.println("********************************");
			System.out.println(t+"********");
			try {
				tabletON.insertar(t);
				return "OK";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		
		return "no felicidades";
	}
	
	@POST
	@Path("actualizarTablet")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void updateDocente(Tablets t) {
		try {
			tabletON.update(t);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@DELETE
	@Path("borrarTablet")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void borrarTablet(@QueryParam("id") int id ){
		try {
			tabletON.borrar(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

	

	

	
	

	

