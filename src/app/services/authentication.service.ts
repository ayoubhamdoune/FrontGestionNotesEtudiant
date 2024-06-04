import { Injectable } from '@angular/core';
import {AppUser} from "../model/user.model";
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GestionService} from "./gestion.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host: string = "http://localhost:8080";
  users:AppUser[]=[];
  authenticatedUser:AppUser | undefined ;
  appUser:any;

  constructor(private gestionService:GestionService) {

  }
  public login(username:string,password:string,role:string):Observable<AppUser>{
    if(role=="admin"){


    this.gestionService.getAdmin(username,password)
      .subscribe(data=>{
        this.appUser=data;
        },error => {
        console.log(error);
        alert("username or password is not correct");
      });
     return of(this.appUser);
    }else if(role=="etudiant"){
      this.gestionService.getUser(username,password)
        .subscribe(data=>{
          this.appUser=data;
        },error => {
          console.log(error);
          alert("username or password is not correct");
        });
      return of(this.appUser);
    }else{ this.appUser=null;return of(this.appUser);}
  }
  public authenticateUser(appUser:AppUser):Observable<boolean>{
 this.authenticatedUser=appUser;
 localStorage.setItem("authUser",JSON.stringify({username:appUser.username,role:appUser.role,jwt:"JWT_TOKEN"}))
  return of(true);
  }
  public hasRole(role:string):boolean{
    return this.authenticatedUser!.role.includes(role);

  }
  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }
  public logout():Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }
}
