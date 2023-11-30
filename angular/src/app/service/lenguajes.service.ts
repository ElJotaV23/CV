import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  
  constructor(private http: HttpClient) { }

  obtenerLenguajes():Observable<any>
  {
    return this.http.get("./assets/lenguajes.json");
  }
}

