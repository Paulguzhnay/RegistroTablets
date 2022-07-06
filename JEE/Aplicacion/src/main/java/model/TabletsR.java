package model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="TBL_Registro")
public class TabletsR implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="reg_id")
	int id ;
	@Column(name="reg_fecha")
	Date fecha;
	@ManyToOne
	@JoinColumn(name="mat_id")
	private Materia materia;
	@ManyToOne
	@JoinColumn(name="doc_id")
	private Docente docente;
	@ManyToOne
	@JoinColumn(name="est_id")
	private Estudiante estudiante;

	@Column(name="reg_observaciones")
	String observaciones;

	@Column(name="reg_estado")
	String estado;	
	
	@Column(name="reg_estadoTxt")
	String estadoTxt;	

	@ManyToOne
	@JoinColumn(name = "tab_id")
	private Tablets tablet;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}



	public Materia getMateria() {
		return materia;
	}

	public void setMateria(Materia materia) {
		this.materia = materia;
	}

	public Docente getDocente() {
		return docente;
	}

	public void setDocente(Docente docente) {
		this.docente = docente;
	}

	public Estudiante getEstudiante() {
		return estudiante;
	}

	public void setEstudiante(Estudiante estudiante) {
		this.estudiante = estudiante;
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getEstadoTxt() {
		return estadoTxt;
	}

	public void setEstadoTxt(String estadoTxt) {
		this.estadoTxt = estadoTxt;
	}

	public Tablets getTablet() {
		return tablet;
	}

	public void setTablet(Tablets tablet) {
		this.tablet = tablet;
	}

	@Override
	public String toString() {
		return "TabletsR [id=" + id + ", fecha=" + fecha + ", materia=" + materia + ", docente=" + docente
				+ ", estudiante=" + estudiante + ", observaciones=" + observaciones + ", estado=" + estado
				+ ", estadoTxt=" + estadoTxt + ", tablet=" + tablet + "]";
	}





}
