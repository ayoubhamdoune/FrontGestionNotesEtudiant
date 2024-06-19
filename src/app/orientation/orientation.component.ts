import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent {

  constructor(private router: Router) { }

  onMonOrientationClick(): void {
    // Logique pour "Mon orientation"
    console.log('Mon orientation button clicked');
    // Rediriger ou effectuer une autre action
  }

  onOrientationGeneralClick(): void {
    // Logique pour "Orientation Générale"
    this.router.navigate(['/admin/orientation-generale']);
    console.log('Orientation Générale button clicked');
    // Rediriger ou effectuer une autre action
  }
}
