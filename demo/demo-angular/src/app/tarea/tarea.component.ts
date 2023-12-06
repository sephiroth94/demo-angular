import { Component, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import * as $ from 'jquery';
import { TareaDialogComponent } from '../tarea-dialog/tarea-dialog.component';
import { FormsModule } from '@angular/forms';
import { ServicioTareasService } from '../service/servicio-tareas.service';
import { EventEmitter } from 'stream';
import { ServicioUsuarioService } from '../service/servicio-usuario.service';
@Component({
  selector: 'app-tarea',
  standalone: true,
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css',
  imports: [DataTablesModule, RouterLink, TareaDialogComponent, FormsModule]
})
export class TareaComponent implements OnInit {

  tareas: any = []
  muestra: Boolean = false;
  txtTitulo: any;
  txtEstado: any;
  txtIdUsuario: any;
  txtDescripcion: any;
  txtFechaCreacion: any;
  usuarios: any;

  constructor(
    private servicioTarea: ServicioTareasService,
    private servicioUsuario: ServicioUsuarioService
  ) { }

  ngOnInit() {
    this.obtenerTareas();
    this.servicioUsuario.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      }
    );
  }

  private obtenerTareas() {
    this.servicioTarea.obtieneTareas().subscribe(
      (data) => {
        this.tareas = data;
        console.log(this.tareas);
      }
    );
  }

  borrar(id: number) {
    this.servicioTarea.eliminaTarea(id).subscribe(
      (data) => {
        window.alert("Borrado exitoso");
        this.obtenerTareas();
      }
    );
  }

  actualiza(id: number) {
    this.servicioTarea.obtieneTarea(id).subscribe(
      (data) => {
        this.opcionActualizar(data, id, false);
        this.txtTitulo = data["título"];
        this.txtEstado = data.estado;
        this.txtIdUsuario = data.usuario.id;
        this.txtDescripcion = data["descripción"];
        this.txtFechaCreacion = data["fechaCreación"];
      }
    );
  }

  enviar(id: number) {
    this.servicioTarea.obtieneTarea(id).subscribe(
      (data) => {

        this.servicioUsuario.obtenerUsuario(this.txtIdUsuario).subscribe(
          (usuario) => {
            data["título"] = this.txtTitulo;
            data.estado = this.txtEstado;
            data.usuario = usuario
            data["descripción"] = this.txtDescripcion;
            data["fechaCreación"] = this.txtFechaCreacion;
            this.opcionActualizar(data, id, true);
            this.servicioTarea.actualizaCrea(data).subscribe(
              (resp) => {
                window.alert("Se actualizo correctamente!!")
              }
            )
          }
        )
      }
    );
    this.obtenerTareas();
  }

  cancelar(id: number) {
    this.servicioTarea.obtieneTarea(id).subscribe(
      (data) => {
        this.opcionActualizar(data, id, true);
      }
    );
    this.obtenerTareas()
  }

  opcionActualizar(data: any, id: number, muestra: boolean) {
    data.muestra = muestra
    let index = this.tareas.findIndex((obj: any) => obj.id == id);
    console.log(this.tareas.findIndex((obj: any) => obj.id == id));
    this.tareas.splice(index, 1, data);
  }


  nuevaTarea() {
    this.muestra = !this.muestra
  }

}
