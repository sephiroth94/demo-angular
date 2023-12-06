package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.Tarea;
import com.example.demo.model.Usuario;
import com.example.demo.repository.RepositoryTarea;
import com.example.demo.repository.RepositoryUsuario;

@org.springframework.stereotype.Service
public class Service {
	@Autowired
	RepositoryTarea tareaRepository;
	
	@Autowired
	RepositoryUsuario usuarioRepository;
	
	public Usuario creaUsuario(Usuario usuario){
		return usuarioRepository.save(usuario);
	}
	
	public Tarea creaTarea(Tarea tarea){
		return tareaRepository.save(tarea);
	}
	
	public Usuario obtenerUsuario(Integer id){
		return usuarioRepository.findById(id).get();
	}
	
	public Tarea obtenerTarea(Integer id){
		return tareaRepository.findById(id).get();
	}
	
	public List<Usuario> obtenerUsuarios(){
		return usuarioRepository.findAll();
	}
	
	public List<Tarea> obtenerTareas(){
		return tareaRepository.findAll();
	}
	
	public Integer borrarTarea(Integer id){
		Integer respuesta = 0;
		
		if(tareaRepository.existsById(id)) {
			tareaRepository.delete(obtenerTarea(id));
			respuesta = 1;
		}
		return respuesta;
	}
	
	public Integer borrarUsuario(Integer id){
		Integer respuesta = 0;
		
		if(usuarioRepository.existsById(id)) {
			usuarioRepository.delete(obtenerUsuario(id));
			respuesta = 1;
		}
		return respuesta;
	}
}
