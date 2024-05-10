import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit{
  public matieres:any;
  constructor(private httpClient:HttpClient) {
  }
  ngOnInit() {

  }

  onGetMatieres() {

    this.httpClient.get("http://localhost:8080/matieres")
      .subscribe(data=>{
        this.matieres=data;
      },error => {
        console.log(error);
      })

  }
}
