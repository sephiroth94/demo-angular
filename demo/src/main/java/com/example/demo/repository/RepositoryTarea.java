package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Tarea;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RepositoryTarea extends JpaRepository<Tarea, Integer>{

}
