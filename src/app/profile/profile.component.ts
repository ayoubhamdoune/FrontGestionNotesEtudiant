import { Component } from '@angular/core';
import {AuthenticationGuard} from "../guards/authentication.guard";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(protected authService:AuthenticationService) {
  }

}
