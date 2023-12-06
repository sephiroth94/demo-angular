import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioUsuarioService } from '../service/servicio-usuario.service';
import { ServicioTareasService } from '../service/servicio-tareas.service';

@Component({
  selector: 'app-tarea-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea-dialog.component.html',
  styleUrl: './tarea-dialog.component.css'
})

export class TareaDialogComponent implements OnInit {
  nuevo: Boolean = false;
  titulo: String = ''
  descripcion: String = '';
  fechaCreacion: Date = new Date();
  usuario: number = 0;
  estado: number = 0;
  usuarios: any = [];

  constructor(
    private usuarioService: ServicioUsuarioService,
    private servicioTarea: ServicioTareasService
  ) { }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      }
    );
  }

  eventoClick() {
    this.usuarioService.obtenerUsuario(this.usuario).subscribe(
      (usuario) => {
        let data: any = {
          "título": this.titulo,
          "estado": this.estado,
          "descripción": this.descripcion,
          "fechaCreación": this.fechaCreacion,
          "usuario": usuario,
          "muestra": true
        }

        console.log(data);

        this.servicioTarea.actualizaCrea(data).subscribe(
          (resp) => {
            window.alert("Se actualizo correctamente!!")
          }
        )
      }
    )

  }
}
