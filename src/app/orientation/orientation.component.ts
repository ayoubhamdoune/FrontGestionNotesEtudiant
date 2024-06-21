import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

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
  
  constructor(public authService:AuthenticationService,private router:Router,private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.onGetMatieres() ;
  }
  public authenticatedID=this.authService.authenticatedUser?.id;

  onGetMatieres() {
this.httpClient.get("http://localhost:8080/matieres/search/findByEtudiantId?id="+this.authenticatedID)
  .subscribe((data)=>{this.matieres=data;});

  
  }
  calculerBulletin() {
    for (let mn of this.matieres._embedded.matieres) {

      this.somme= this.somme +((mn.noteMatiere)*(mn.coeff));
      console.log(mn.noteMatiere +"hh"+ mn.coeff +"hh"+ mn.coeff*mn.noteMatiere);
      this.inis=this.inis+1;

    }

    this.bulletin=(this.somme/this.inis);

    }


  onMonOrientationClick(): void {
    // Logique pour "Mon orientation"
    console.log('Mon orientation button clicked');
    // Afficher le paragraphe
    if(this.showParagraph){
      this.showParagraph = false;
    }else{
      this.showParagraph = true;
    }

  }

  onOrientationGeneralClick(): void {
    // Logique pour "Orientation Générale"
    this.router.navigate(['/admin/orientation-generale']);
    console.log('Orientation Générale button clicked');
    // Rediriger ou effectuer une autre action
  }
}
