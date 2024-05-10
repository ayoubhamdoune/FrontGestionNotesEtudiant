import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatieresComponent } from './matieres/matieres.component';
import { NewMatiereComponent } from './new-matiere/new-matiere.component';

const routes: Routes = [
  {
    path:"matieres",component: MatieresComponent
  },
  {
    path:"new-matiere",component:NewMatiereComponent
  },
  {

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
