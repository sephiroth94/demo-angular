package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id; 
	private String usuario;
	private String nombre;
	private boolean muestra;
	
	public Usuario(Integer id, String usuario, String nombre) {
		this.id = id;
		this.usuario = usuario;
		this.nombre = nombre;
	}
	
	public Usuario() {
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public boolean isMuestra() {
		return muestra;
	}

	public void setMuestra(boolean muestra) {
		this.muestra = muestra;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", usuario=" + usuario + ", nombre=" + nombre + "]";
	}
	
	
}
