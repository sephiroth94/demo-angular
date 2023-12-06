import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import * as $ from 'jquery';
import { ServicioUsuarioService } from '../service/servicio-usuario.service';
import { FormsModule } from '@angular/forms';
import { UsuarioDialogComponent } from "../usuario-dialog/usuario-dialog.component";

@Component({
    selector: 'app-usuario',
    standalone: true,
    templateUrl: './usuario.component.html',
    styleUrl: './usuario.component.css',
    imports: [DataTablesModule, RouterLink, FormsModule, UsuarioDialogComponent]
})
export class UsuarioComponent implements OnInit {

  
  usuarios: any;
  txtNombre: any;
  txtUsuario: any;
  muestra: any = false;

  constructor(
    private servicioUsuario: ServicioUsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.servicioUsuario.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      }
    );
  }

  enviar(id: number) {
    this.servicioUsuario.creaActualizaUsuario(
      {
        id: id,
        nombre: this.txtNombre,
        usuario: this.txtUsuario,
        muestra: true
      }
    ).subscribe(
      (data) =>{
        window.alert("Se actualizo usuario");
      }
    )
    this.obtenerUsuarios();
  }

  cancelar(id: number) {
    this.servicioUsuario.obtenerUsuario(id).subscribe(
      (data) => {
        this.opcionActualizar(data, id, true);
      }
    );
    this.obtenerUsuarios()
  }

  borrar(id: number) {
    this.servicioUsuario.eliminaUsuario(id).subscribe(
      (data) => {
        window.alert("Borrado exitoso");
        this.obtenerUsuarios();
      }
    );
  }

  actualiza(id: number) {
    this.servicioUsuario.obtenerUsuario(id).subscribe(
      (data) => {
        this.opcionActualizar(data, id, false);
        this.txtNombre = data.nombre;
        this.txtUsuario= data.usuario;
      }
    );
  }

  opcionActualizar(data: any, id: number, muestra: boolean) {
    data.muestra = muestra
    let index = this.usuarios.findIndex((obj: any) => obj.id == id);
    console.log(this.usuarios.findIndex((obj: any) => obj.id == id));
    this.usuarios.splice(index, 1, data);
  }

  nuevoUsuario() {
    this.muestra = !this.muestra;
  }

}
