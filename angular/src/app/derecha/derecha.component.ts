import { Component } from '@angular/core';
import { PerfilProfesionalizanteService} from '../service/perfil-profesionante.service';
import { ExperienciaLaboralService } from '../service/experiencia-laboral.service';

@Component({
  selector: 'app-derecha',
  templateUrl: './derecha.component.html',
  styleUrls: ['./derecha.component.css']
})
export class DerechaComponent {
  perfilProfesionalizante:any;
  experienciaLaboral:any;
  constructor(private perfilprofesionalizante: PerfilProfesionalizanteService, private experiencialaboral: ExperienciaLaboralService) {
    this.perfilprofesionalizante.obtenerPerfilProfesionalizante().subscribe(
      {
        next: (data) => {
          this.perfilProfesionalizante = data["PerfilProfesionalizante"];
          console.log(data);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente");
          console.error(err);
        }
      }
    ),
    this.experiencialaboral.obtenerExperienciaLaboral().subscribe(
      {
        next: (data) => {
          this.experienciaLaboral = data["experienciaLaboral"];
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
