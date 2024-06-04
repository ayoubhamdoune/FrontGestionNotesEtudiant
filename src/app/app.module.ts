import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EtudiantsComponent } from './etudiants/etudiants.component';

import { MatieresComponent } from './matieres/matieres.component';
import { NewMatiereComponent } from './new-matiere/new-matiere.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProfileComponent } from './profile/profile.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    MatieresComponent,
    NewMatiereComponent,
    LoginComponent,
    AdminComponent,
    EtudiantComponent,
    ProfileComponent,
    NewEtudiantComponent,
    EditEtudiantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
