import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public User$;
  public message : string;

  constructor(public authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  public login(email: string, password: string) {
    this.authService.Login(email, password)
    .then(resolve => {
      console.log("success loggin in");
      this.router.navigate(['/Home']);
    }, 
    (err =>{
      console.log(err);
      this.message = err;
    })
    );
  }
}
