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
  public size:number=10;
  public currentPage:number=0;
  public totalPages:number=0;
  public pages: Array<number> | undefined;

  constructor(private gestionService:GestionService) {
  }
  ngOnInit() {

  }

  onGetMatieres() {

    this.gestionService.getMatiere(this.currentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.matieres=data;
      },error => {
        console.log(error);
      })

  }
  onPageMatiere(i: number) {
  this.currentPage=i;
  this.onGetMatieres();
  }

}
