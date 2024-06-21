
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent {
  showParagraph: boolean = false;
  public matieres:any;
  public pages: Array<number> | undefined;
  public bulletin:any;
  public somme:number=0;
  public inis:number=0;
  public noteSm:number=0;

  

  public sommeCoeff:number=0;
  public size:number=10;
  public currentPage:number=0;
  public totalPages:number=0;
  


  constructor(private gestionService:GestionService,public authService:AuthenticationService,private router:Router,private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.onGetMatieres();
  }
  public authenticatedID=this.authService.authenticatedUser?.id;

  onGetMatieres() {
this.httpClient.get("http://localhost:8080/matieres/search/findByEtudiantId?id="+this.authenticatedID)
  .subscribe((data)=>{this.matieres=data;});
   console.log(this.matieres._embedded.matieres);
  
  }
 


  onMonOrientationClick(): void {

    this.calculerOrt();
    // Logique pour "Mon orientation"
    console.log('Mon orientation button clicked');
    // Afficher le paragraphe
    if(this.showParagraph){
      this.showParagraph = false;
    }else{
      this.showParagraph = true;
    }

  }
  calculerOrt() {
    for (let mn of this.matieres._embedded.matieres) {
console.log(mn.nom);
      if(mn.nom=='Mathématiques'){
        console.log(mn.nom,mn.noteMatiere);
        this.noteSm=this.noteSm + (mn.noteMatiere)*9 ;
        if(mn.nom=='Physique et Chimie'){
          this.noteSm=this.noteSm + (mn.noteMatiere)*7 ;
        }
        if(mn.nom=='Anglais'){
          this.noteSm=this.noteSm + (mn.noteMatiere)*5 ;
        }
        if(mn.nom=='Français'){
          this.noteSm=this.noteSm + (mn.noteMatiere)*5 ;
        }
      }
     

    }



    }

  onOrientationGeneralClick(): void {
    // Logique pour "Orientation Générale"
    this.router.navigate(['/admin/orientation-generale']);
    console.log('Orientation Générale button clicked');
    // Rediriger ou effectuer une autre action
  }
}
