import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTareasService {
  constructor(
    private http:HttpClient
  ) { }

  obtieneTareas():Observable<any>{
    return this.http.get('http://localhost:8080/gestion/obtenerTareas');
  }

  obtieneTarea(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/gestion/obtenerTarea/' + id);
  }

  eliminaTarea(id:number):Observable<any>{
    return this.http.delete('http://localhost:8080/gestion/borrarTarea/' + id)
  }

  actualizaCrea(obj:any):Observable<any>{
    return this.http.post('http://localhost:8080/gestion/creaTarea', obj)
  }
}
