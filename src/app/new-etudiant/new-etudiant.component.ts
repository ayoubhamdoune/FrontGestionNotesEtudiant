import { Component } from '@angular/core';
import {GestionService} from "../services/gestion.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent {
  private data: any;
  constructor(private gestionService: GestionService) {
  }
  ngOnInit(){

  }

  /*onSaveEtudiant(value: any) {
    this.gestionService.saveResource((this.gestionService.host+"/etudiants",this.data).subscribe((res: any)=> {console.log(res);},(error: any)=>{console.log(error);})
  }*/
}


