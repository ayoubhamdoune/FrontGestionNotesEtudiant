import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GestionService} from "../services/gestion.service";

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit{
  public matieres:any;
  constructor(private gestionService:GestionService) {
  }
  ngOnInit() {

  }

  onGetMatieres() {

    this.gestionService.getMatiere()
      .subscribe(data=>{
        this.matieres=data;
      },error => {
        console.log(error);
      })

  }
}
