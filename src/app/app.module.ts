import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EtudiantsComponent } from './etudiants/etudiants.component';

import { MatieresComponent } from './matieres/matieres.component';
import { NewMatiereComponent } from './new-matiere/new-matiere.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    MatieresComponent,
    NewMatiereComponent,

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
