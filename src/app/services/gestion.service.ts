import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Etudiant} from "../model/etudiant.model";


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
    public getUser(username:string,password:string):Observable<any>{
    return this.httpClient.get(this.host + "/admins/search/findByUsernameAndPassword?username="+username+"&password="+ password);
    }

  public getEtudiantsByKeyword(mc: string,page: number, size: number):Observable<any>    {
    return this.httpClient.get(this.host + "/etudiants/search/byFirstNamePage?mc=" + mc + "&page=" + page + "&size=" + size);
  }

  public deleteResource(url:any):Observable<any>{
    return this.httpClient.delete(url);
  }

  public saveResource(data: any): Observable<Etudiant>{
  // @ts-ignore
    return this.httpClient.post(this.host+"/etudiants",data)}
  /*public saveResource(url: any, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(url, data, { headers });
  }*/

  public getResource(url: any) : Observable<Etudiant>{
    // @ts-ignore
    return this.httpClient.get<Etudiant>(url);}

  public updateResource(url: string | undefined, data: any) : Observable<Etudiant>{
    // @ts-ignore
    return this.httpClient.put(url, data);
  }




}
