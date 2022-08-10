package model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="TBL_Estudiante")
public class Estudiante implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="est_id")
	int id ;
	@Column(name="est_nombre")
	String nombre;
	@Column(name="est_apellido")
	String apellido;
	@Column(name="est_carrera")
	String carrera;

	@Column(name="est_asignatura")
	String asignatura;
	@Column(name="est_periodoA")
	String periodoAcademico;
	
	@Column(name = "tablet_id")
	String codTablet;
	
	@ManyToOne
	@JoinColumn(name = "mat_id")
	private Materia materia;
	

	
	//getters and setters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public Materia getMateria() {
		return materia;
	}
	public void setMateria(Materia materia) {
		this.materia = materia;
	}

	public String getCarrera() {
		return carrera;
	}
	public void setCarrera(String carrera) {
		this.carrera = carrera;
	}

	public String getAsignatura() {
		return asignatura;
	}
	public void setAsignatura(String asignatura) {
		this.asignatura = asignatura;
	}
	public String getPeriodoAcademico() {
		return periodoAcademico;
	}
	public void setPeriodoAcademico(String periodoAcademico) {
		this.periodoAcademico = periodoAcademico;
	}
	
	
	
	public String getCodTablet() {
		return codTablet;
	}
	public void setCodTablet(String codTablet) {
		this.codTablet = codTablet;
	}
	@Override
	public String toString() {
		return "Estudiante [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", carrera=" + carrera
				+ ", asignatura=" + asignatura + ", periodoAcademico=" + periodoAcademico + ", codTablet=" + codTablet
				+ ", materia=" + materia + "]";
	}


	
}
