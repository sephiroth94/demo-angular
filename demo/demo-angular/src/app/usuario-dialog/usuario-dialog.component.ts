import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioUsuarioService } from '../service/servicio-usuario.service';

@Component({
  selector: 'app-usuario-dialog',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './usuario-dialog.component.html',
  styleUrl: './usuario-dialog.component.css'
})
export class UsuarioDialogComponent {
  
  txtUsuario: any;
  txtNombre: any;

  constructor(
    private usuarioService: ServicioUsuarioService,
  ){}

  eventoClick() {
    this.usuarioService.creaActualizaUsuario(
      {
        nombre: this.txtNombre,
        usuario: this.txtUsuario,
        muestra: true
      }
    ).subscribe(
      (data) =>{
        window.alert("Se inserta usuario");
      }
    )
  }

}
