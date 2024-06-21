import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent {
  showParagraph: boolean = false;

  constructor(private router: Router) { }


  onMonOrientationClick(): void {
    // Logique pour "Mon orientation"
    console.log('Mon orientation button clicked');
    // Afficher le paragraphe
    this.showParagraph = true;
  }

  onOrientationGeneralClick(): void {
    // Logique pour "Orientation Générale"
    this.router.navigate(['/admin/orientation-generale']);
    console.log('Orientation Générale button clicked');
    // Rediriger ou effectuer une autre action
  }
}
