import { Component } from '@angular/core';
import { ContactosService } from '../service/contactos.service';
import { DatosAcademicosService } from '../service/datos-academicos-.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  Contactos: any;
  datosAcademicos:any;
  constructor(private contactosService: ContactosService, private datosAcademicosService:DatosAcademicosService) {
    this.contactosService.obtenerContactos().subscribe(
      {
        next: (data) => {
          this.Contactos = data["contactos"];
          console.log(data);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }

    ),
    this.datosAcademicosService.obtenerDatosAcademicos().subscribe(
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
    )
  }
}

