package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Tarea;
import com.example.demo.model.Usuario;
import com.example.demo.service.Service;

@RestController
@RequestMapping("/gestion")
public class Controller {
	@Autowired
	private Service service;
	
	@PostMapping("/creaUsuario")
	public ResponseEntity<Usuario> creaUsuario(@RequestBody Usuario usuario){
		System.out.println(usuario.toString());
		return ResponseEntity.ok(service.creaUsuario(usuario));
	}
	
	@PostMapping("/creaTarea")
	public ResponseEntity<Tarea> creaTarea(@RequestBody Tarea tarea){
		return ResponseEntity.ok(service.creaTarea(tarea));
	}
	
	@GetMapping("/obtenerUsuario/{id}")
	public ResponseEntity<Usuario> obtenerUsuario(@PathVariable Integer id){
		return ResponseEntity.ok(service.obtenerUsuario(id));
	}
	
	@GetMapping("/obtenerTarea/{id}")
	public ResponseEntity<Tarea> obtenerTarea(@PathVariable Integer id){
		return ResponseEntity.ok(service.obtenerTarea(id));
	}
	
	@GetMapping("/obtenerUsuarios")
	public ResponseEntity<List<Usuario>> obtenerUsuarios(){
		return ResponseEntity.ok(service.obtenerUsuarios());
	}
	
	@GetMapping("/obtenerTareas")
	public ResponseEntity<List<Tarea>> obtenerTareas(){
		return ResponseEntity.ok(service.obtenerTareas());
	}
	
	@PutMapping("/actualizaTarea")
	public ResponseEntity<Tarea> actualizaTarea(@RequestBody Tarea tarea){
		return ResponseEntity.ok(service.creaTarea(tarea));
	}
	
	@PutMapping("/actualizaUsuario")
	public ResponseEntity<Usuario> actualizaUsuario(@RequestBody Usuario usuario){
		return ResponseEntity.ok(service.creaUsuario(usuario));
	}
	
	@DeleteMapping("/borrarTarea/{id}")
	public ResponseEntity<Void> borrarTarea(@PathVariable Integer id){
		Integer respuesta = service.borrarTarea(id);
		return respuesta == 0 ? ResponseEntity.notFound().build() : ResponseEntity.ok().build();
	}
	
	@DeleteMapping("/borrarUsuario/{id}")
	public ResponseEntity<Void> borrarUsuario(@PathVariable Integer id){
		Integer respuesta = service.borrarUsuario(id);
		return respuesta == 0 ? ResponseEntity.notFound().build() : ResponseEntity.ok().build();
	}
}
