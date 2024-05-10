import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatieresComponent } from './matieres/matieres.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';

const routes: Routes = [ 
  { path: 'etudiants', component: EtudiantsComponent },


  {
    path:"matieres",component: MatieresComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
