import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {


  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(): Observable<any> {
    return this.http.get('http://localhost:8080/gestion/obtenerUsuarios');
  }

  obtenerUsuario(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/gestion/obtenerUsuario/' + id);
  }

  eliminaUsuario(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/gestion/borrarUsuario/' +  id);
  }

  creaActualizaUsuario(obj:any): Observable<any> {
    return this.http.post('http://localhost:8080/gestion/creaUsuario', obj);
  }
}
