import { Component } from '@angular/core';
import { DatosPersonalesService } from '../service/datos-personales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  datosPersonales:any;
  constructor(private datospersonales: DatosPersonalesService) {
    this.datospersonales.obtenerDatosPersonales().subscribe(
      {
        next: (data) => {
          this.datosPersonales = data["datospersonales"];
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
