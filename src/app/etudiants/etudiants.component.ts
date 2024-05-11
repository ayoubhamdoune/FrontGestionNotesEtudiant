import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GestionService} from "../services/gestion.service";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit{
  public etudiants:any;
  public size:number=10;
  public currentPage:number=0;
  public totalPages:number=0;
  public pages: Array<number> | undefined;


  constructor(private gestionService:GestionService) {
  }
  ngOnInit() {

  }

  onGetEtudiants() {
      this.gestionService.getEtudiant(this.currentPage,this.size)
      .subscribe(data=>{
        this.etudiants=data;
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
      },error => {
        console.log(error);
      });

  }

  onPageEtudiant(i: number) {
    this.currentPage=i;
this.onGetEtudiants();
  }
}
