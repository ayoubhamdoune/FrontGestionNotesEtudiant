import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatieresComponent } from './matieres/matieres.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {NewMatiereComponent} from "./new-matiere/new-matiere.component";
import {LoginComponent} from "./login/login.component";
import {NewEtudiantComponent} from "./new-etudiant/new-etudiant.component";


const routes: Routes = [
  { path:"login", component: LoginComponent

  },
  { path:"etudiants", component: EtudiantsComponent

  },
  {
    path:"matieres",component: MatieresComponent
  },
  {
    path:"new-matiere",component:NewMatiereComponent
  },
  {
    path:"new-etudiant",component:NewEtudiantComponent
  },
  {
    path:"",redirectTo:"/etudiants",pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
