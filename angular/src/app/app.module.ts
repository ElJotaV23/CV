import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IzquierdaComponent } from './izquierda/izquierda.component';
import { DerechaComponent } from './derecha/derecha.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciaLaboralComponent } from './cv/experiencia-laboral/experiencia-laboral.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IzquierdaComponent,
    DerechaComponent,
    FooterComponent,
    ExperienciaLaboralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
