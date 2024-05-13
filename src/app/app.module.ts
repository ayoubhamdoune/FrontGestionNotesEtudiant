import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EtudiantsComponent } from './etudiants/etudiants.component';

import { MatieresComponent } from './matieres/matieres.component';
import { NewMatiereComponent } from './new-matiere/new-matiere.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    MatieresComponent,
    NewMatiereComponent,
    LoginComponent,
    NewEtudiantComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
