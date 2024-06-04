import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public authService:AuthenticationService,private router:Router) {
  }

  handleLogout() {
     this.authService.logout().subscribe({
       next:(data)=>{
         this.router.navigateByUrl("")
       }
     })
  }
}
