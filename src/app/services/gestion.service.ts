import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GestionService {
  public host: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  public getEtudiant(page: number, size: number): Observable<any> {
    return this.httpClient.get(this.host + "/etudiants?page=" + page + "&size=" + size);
  }

  public getMatiere(page: number, size: number): Observable<any> {
      return this.httpClient.get(this.host + "/matieres?page=" + page + "&size=" + size);
    }



}
