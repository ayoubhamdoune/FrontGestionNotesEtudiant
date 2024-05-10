import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EtudiantsComponent } from './etudiants/etudiants.component';

const routes: Routes = [ 
  { path: 'etudiants', component: EtudiantsComponent },

=======
import { MatieresComponent } from './matieres/matieres.component';

const routes: Routes = [
  {
    path:"matieres",component: MatieresComponent
  }
>>>>>>> d95f0718053407dfb405ca45b4d9b8b2b8c27026
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
