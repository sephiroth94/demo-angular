package com.example.demo.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
@Entity
@Table
public class Tarea {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private Integer id;
	 private String titulo;
	 private String descripcion;
	 @Temporal(TemporalType.DATE)
	 private Date fechaCreacion;
	 private Integer estado;
	 @OneToOne
	 private Usuario usuario;
	 @Column(columnDefinition = "boolean default true")
	 private Boolean muestra;
	 
	public Tarea(Integer id, String título, String descripción, Date fechaCreación, Integer estado, Usuario usuario) {
		this.id = id;
		this.titulo = título;
		this.descripcion = descripción;
		this.fechaCreacion = fechaCreación;
		this.estado = estado;
		this.usuario = usuario;
	}

	public Tarea() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTítulo() {
		return titulo;
	}

	public void setTítulo(String título) {
		this.titulo = título;
	}

	public String getDescripción() {
		return descripcion;
	}

	public void setDescripción(String descripción) {
		this.descripcion = descripción;
	}

	public Date getFechaCreación() {
		return fechaCreacion;
	}

	public void setFechaCreación(Date fechaCreación) {
		this.fechaCreacion = fechaCreación;
	}

	public Integer getEstado() {
		return estado;
	}

	public void setEstado(Integer estado) {
		this.estado = estado;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Boolean getMuestra() {
		return muestra;
	}

	public void setMuestra(Boolean muestra) {
		this.muestra = muestra;
	}

	@Override
	public String toString() {
		return "Tarea [id=" + id + ", título=" + titulo + ", descripción=" + descripcion + ", fechaCreación="
				+ fechaCreacion + ", estado=" + estado + ", usuario=" + usuario + "]";
	}


	 
}