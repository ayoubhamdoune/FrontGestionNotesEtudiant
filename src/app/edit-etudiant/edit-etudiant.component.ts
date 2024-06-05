import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GestionService} from "../services/gestion.service";
import {Etudiant} from "../model/etudiant.model";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent {
  protected currentEtudiant: Etudiant | undefined;
  private url: string | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private gestionService: GestionService) {
  }
  ngOnInit() {
    const encodedUrl = this.activatedRoute.snapshot.params['id'];
    this.url = atob(encodedUrl);
    console.log('Decoded URL:', this.url); // Pour débogage

    if (this.url) {
      this.gestionService.getResource(this.url)
        .subscribe(data => {
          this.currentEtudiant = data;
          console.log('Loaded Etudiant:', this.currentEtudiant); // Pour débogage
        }, error => {
          console.log(error);
        });
    } else {
      console.error('URL is undefined');
    }
  }

  onUpdateEtudiant(value: any) {
    console.log('Updated values:', value); // Pour débogage
    if (this.url) {
      this.gestionService.updateResource(this.url, value)
        .subscribe(
          data => {
            alert("Mise à jour effectuée avec succès");
            this.router.navigateByUrl("/admin/etudiants");
          },
          error => {
            console.log(error);
          });
    } else {
      console.error('URL is undefined');
    }
  }
}

 /* ngOnInit() {
    let url = atob(this.activatedRoute.snapshot.params['id']);
    this.gestionService.getResource(this.url)
      .subscribe(data=> {
        this.currentEtudiant = data;
      },error=>{
        console.log(error);
      })
    /*this.url = atob(this.activatedRoute.snapshot.params['id']);
    this.gestionService.getResource(this.url)
      .subscribe(data=> {
        this.currentEtudiant = data;
      },error=>{
        console.log(error);
      })
  }


  onUpdateEtudiant(value: any) {
    this.gestionService.updateResource(this.url, value)
      .subscribe(
        data => {
          alert("Mise à jour effectuée avec succès");
          this.router.navigateByUrl("/etudiants");
        },
      (error: any)=> {
      console.log(error);
    });

  }
*/





