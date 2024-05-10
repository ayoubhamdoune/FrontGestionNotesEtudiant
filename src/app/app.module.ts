import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { EtudiantsComponent } from './etudiants/etudiants.component';
=======
import { MatieresComponent } from './matieres/matieres.component';
import { NewMatiereComponent } from './new-matiere/new-matiere.component';
>>>>>>> d95f0718053407dfb405ca45b4d9b8b2b8c27026

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    EtudiantsComponent
=======
    MatieresComponent,
    NewMatiereComponent
>>>>>>> d95f0718053407dfb405ca45b4d9b8b2b8c27026
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
