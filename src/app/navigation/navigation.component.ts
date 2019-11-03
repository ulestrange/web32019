import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public  authService: AuthService, private router: Router) {}
  navbarOpen: boolean = false;

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public logout(){
    console.log(' logut');
    this.authService.Logout();
    this.router.navigate(['']);  
  }

}


