import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";


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

  public getEtudiantsByKeyword(mc: string,page: number, size: number):Observable<any>    {
    return this.httpClient.get(this.host + "/etudiants/search/byFirstNamePage?mc=" + mc + "&page=" + page + "&size=" + size);
  }

  public deleteResource(url:any):Observable<any>{
    return this.httpClient.delete(url);
  }


  public saveResource(url: any, data: any): Observable<any>{
  return this.httpClient.post(url,data)}

}
