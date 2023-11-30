import { Component } from '@angular/core';
import { DatosAcademicosService } from '../service/datos-academicos-.service';
import { HabilidadesService } from '../service/habilidades.service';
import { LenguajesService } from '../service/lenguajes.service';

@Component({
  selector: 'app-izquierda',
  templateUrl: './izquierda.component.html',
  styleUrls: ['./izquierda.component.css']
})
export class IzquierdaComponent {
  datosAcademicos:any;
  Habilidades:any;
  Lenguajes:any;
  constructor(private datosacademicos:DatosAcademicosService, private habilidades:HabilidadesService,private lenguaje:LenguajesService) {
    this.datosacademicos.obtenerDatosAcademicos().subscribe(
      {
        next: (data) => {
          this.datosAcademicos = data["datosacademicos"];
          console.log(data);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }
    ),
    this.habilidades.obtenerHabilidades().subscribe(
      {
        next: (data) => {
          this.Habilidades = data["habilidades"];
          console.log(data);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }
    ),
    this.lenguaje.obtenerLenguajes().subscribe(
      {
        next: (data) => {
          this.Lenguajes = data["lenguajes"];
          console.log(data);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }
    )
}
}

