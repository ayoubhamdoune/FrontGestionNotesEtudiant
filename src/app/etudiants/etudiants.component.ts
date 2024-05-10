import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit{
  public etudiants:any;
  constructor(private httpClient:HttpClient) {
  }
  ngOnInit() {

  }

  onGetEtudiants() {

    this.httpClient.get("http://localhost:8080/etudiants")
      .subscribe(data=>{
        this.etudiants=data;
      },error => {
        console.log(error);
      })

  }
}
