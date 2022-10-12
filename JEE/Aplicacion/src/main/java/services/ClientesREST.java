package services;

import java.awt.PageAttributes.MediaType;
import java.util.ArrayList;
import java.util.Iterator;
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
import busniess.MateriaON;
import busniess.MateriaONLocal;
import busniess.UsuarioONLocal;

import busniess.TabletONLocal;
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
	
	@Inject
	private DocenteONLocal docentesON;
	
	@Inject
	private EstudianteONLocal estudiantesON;
	
	
	
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
			m.setId(listMateria.get(0).getId());
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
	
	//Eliminar Estudiante
	@DELETE
	@Path("eliminarEstudiante")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void eliminar(@QueryParam("id") int id ) {

		estudianteLocal.delete(id);
	}
	
	//Buscar Docente
	@GET
	@Path("buscarDocente")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Docente getDocente(@QueryParam("id") int id){
		Docente docente = docenteLocal.buscarDocente(id);
		return docente;
	}
	
	//Buscar Estudiante
	@GET
	@Path("buscarEstudiantes")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Estudiante getEstudianteID(@QueryParam("id") int id){
		Estudiante estudiante = estudianteLocal.buscarEstudiante(id);
		return estudiante;
	}
	
	//Ingresar Materia
	@POST
	@Path("RegistrarM")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String guardarMateria(Materia mat) {
			
		
		int id  = mat.getDocente().getId();
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
		return materia;
	}
	
	//Actualizar Materia
	@POST
	@Path("actMat")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void updateMateria(Materia mat) {

		materiaLocal.update(mat);
	}

	
	//Eliminar Docente
	//Eliminar Materia
		@DELETE
		@Path("eliminarDocente")
		@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
		@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
		public void eliminarDocente(@QueryParam("id") int id ) {
			docenteLocal.delete(id);
		}
	
	//Eliminar Materia
	@DELETE
	@Path("eliminarMateria")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void eliminarMateria(@QueryParam("id") int id ) {
		
		materiaLocal.eliminar(id);
	}
//Buscar Materia
	
	@GET
	@Path("ListarMaterias")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Materia getMateriaID(@QueryParam("id") int id){
		Materia materia = materiaLocal.getMateriaDatos(id);
		return materia;
	}
	
	//Buscar Materia por docente
	@GET
	@Path("buscarMateriaDocente")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<Materia> getMateriaDocente(@QueryParam("id") int id){
		List<Materia> materias = materiaLocal.getListMateriaDocente(id);
		return materias;
	}
	
	
	
	//JAPON
	//Registrar Usuarios colaboradores
	@POST
	@Path("RegistroU")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public String guardarUsuario(Usuario usuario) {
			

			try {
				usuarioLocal.insertar(usuario);

				return "OK";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		
		return "no felicidades";
	}
	
	//tomar los valores de correo y password
	
	@GET
	@Path("Login")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public boolean getUsuarios(@QueryParam("correo")String correou, @QueryParam("password")String passwordu){

		List<Usuario> usuarios = usuarioLocal.getUsuarios(correou, passwordu);
		

		boolean bandera=false;
		if (usuarios.size()==1) {
			bandera=true;
			return bandera;
		}
		

		
		return bandera;
	}
	
	
	
	
	
	/////////////////////////////////////////////////////////
	
	
	
	
	//Joseph 
	
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
	

	
	//------------------------------------------------------
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
	
	//-------------------------------
	@GET
	@Path("estudiantesT")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<Estudiante> getEstudiantesM(@QueryParam("id") int id){
		return estudiantesON.getEstudiantesR(id);
	}
	//-------------------------------
	@GET
	@Path("listTabletsVerificadas")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public TabletsR getTabletsR(@QueryParam("id") int id){
		TabletsR modeloR= tabletON.getListTabletsVerificada(id);

		return modeloR;
	}
	//-----------------------------------------------------------
	@POST
	@Path("InsertarTR")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public boolean guardarRegistroEstTablet(TabletsR tabR) {
		boolean bandera = false;
		try {
			tabletON.insertarTR(tabR);
			bandera = true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return bandera;
	}
			
	//----------------------------------------
	@POST
	@Path("actualizarPrestamo")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public void updateTabletRegistro(TabletsR tabR) throws Exception {


		tabletON.updateR(tabR);
	}
	
	
	
	@GET
	@Path("verficarTabletsPrestadas")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<TabletsR> getTabletP(){
		return tabletON.getTabletsPrestadas();
	}
	//--------------------
	//Verificar Tablet
	@GET
	@Path("verificarTablet")
	@Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Tablets getTabletVerificada(@QueryParam("codigo") String codigo){

		Tablets tablet = tabletON.verificar(codigo);

		return tablet;
	}
// METODOS PARA EL LIST-ESTUDIANTE
	//--------------------
	//---------------------------------------------------
	@GET
	@Path("estudiantesPrestamos")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public List<TabletsR> getEstudiantesPrestamo(@QueryParam("id") int id){
		return estudiantesON.verficarTabletEstReg(id);
	}
	
	//----------------------------
	@GET
	@Path("verificarTabletEst")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public boolean verificarTabletRegistradaEst(@QueryParam("id") int id, @QueryParam("nombreT") String nombreT ){
		List<Estudiante> estT=new ArrayList<Estudiante>();
		boolean bandera=false;

		estT=estudiantesON.TabletEstudianteRegistrada(id);


		if(estT.get(0).getCodTablet().equals(nombreT)) {
			bandera=true;
		}

		return bandera;
	}

	//----------------------------------------------------------------------------------------------------------------------------
	@GET
	@Path("verificarEstRegistrado")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public boolean verificarEstRegistrado(@QueryParam("nombre") String nombre, @QueryParam("apellido") String apellido, 
										  @QueryParam("carrera") String carrera ){
		List<Estudiante> estT=new ArrayList<Estudiante>();
		boolean bandera=false;
		estT=estudiantesON.getEstudiantes();

		for (int i = 0; i < estT.size(); i++) {

			if(estT.get(i).getNombre().equals(nombre) && estT.get(i).getApellido().equals(apellido)
				&& estT.get(i).getCarrera().equals(carrera)) {
				return bandera=true;			
			}
		}
	return bandera;
	}
	//----------------------------------------------------------------------------------------------------------------------------
	@GET
	@Path("verificarTabRegistrado")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public boolean verificarTabRegistrado(@QueryParam("nombre") String nombreT){
		
		List <Tablets> listTablet = new ArrayList<Tablets>();
		listTablet=tabletON.getTablets();
		boolean bandera=false;

		
		for (int i = 0; i < listTablet.size(); i++) {

			if(listTablet.get(i).getNombre().equals(nombreT)) {
				return bandera=true;			
			}
		}
	return bandera;
	}
	
	//VERIFICAR DOCENTE REGISTRADA
	//----------------------------------------------------------------------------------------------------------------------------
	@GET
	@Path("verificarDocRegistrado")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public boolean verificarDocRegistrado(@QueryParam("nombre") String nombreD,@QueryParam("apellido") String apellidoD){
		
		List <Docente> listDocentes = new ArrayList<Docente>();
		listDocentes=docentesON.getDocentes();
		boolean bandera=false;

		
		for (int i = 0; i < listDocentes.size(); i++) {

			if((listDocentes.get(i).getNombre().equalsIgnoreCase(nombreD)) && 
				(listDocentes.get(i).getApellido().equalsIgnoreCase(apellidoD))) {
				return bandera=true;			
			}
		}
	return bandera;
	}
	
	//VERIFICAR MATERIA REGISTRADA
	@GET
	@Path("verificarMatRegistrado")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public boolean verificarMatRegistrado(@QueryParam("nombre") String nombreM,@QueryParam("idD") int codigoD){
		
		List <Materia> listMateria = new ArrayList<Materia>();
		listMateria=materiaLocal.getListMateria();
		boolean bandera=false;

		
		for (int i = 0; i < listMateria.size(); i++) {

			if((listMateria.get(i).getNombre().equals(nombreM)) && 
				(listMateria.get(i).getDocente().getId()==codigoD)) {
				return bandera=true;			
			}
		}
	return bandera;
	}	

}

	

	

	
	

	

