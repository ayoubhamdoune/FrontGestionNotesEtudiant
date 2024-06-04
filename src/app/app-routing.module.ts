import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatieresComponent } from './matieres/matieres.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {NewMatiereComponent} from "./new-matiere/new-matiere.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthenticationService} from "./services/authentication.service";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {ProfileComponent} from "./profile/profile.component";
import {NewEtudiantComponent} from "./new-etudiant/new-etudiant.component";
import {EditEtudiantComponent} from "./edit-etudiant/edit-etudiant.component";


const routes: Routes = [
  { path:"", component: LoginComponent

  },
  { path:"admin", component: AdminComponent, canActivate:[AuthenticationGuard], children:[
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
        path:"profile",component:ProfileComponent
      },
      {
        path:"edit-product/:id",component:EditEtudiantComponent
      },
    ]

  },

  /*
  {
    path:"",redirectTo:"/etudiants",pathMatch:'full'
  }*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
