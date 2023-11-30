import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PerfilProfesionalizanteService {

  
  constructor(private http: HttpClient) { }

  obtenerPerfilProfesionalizante():Observable<any>
  {
    return this.http.get("./assets/perfil-profesionante.json");
  }
}
