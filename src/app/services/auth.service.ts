import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tempLogin: boolean = false;

  
  constructor() {

  }

  Login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (password === "password") {
        this.tempLogin = true;
        resolve(true)
      }
      else {
        reject('worng password')
      }

    })
  }



  SignUp(email: string, password: string): Promise<any> {

    return new Promise<any>((resolve, reject) => {
      if (password === "password") {
        this.tempLogin = true;
        resolve(true)
      }
      else {
        reject('passord is too hard to guess try password')
      }
    })
  }




  Logout() {
    this.tempLogin = false;
  }


  IsLoggedIn(): boolean {
    return this.tempLogin;

  }

  GetDisplayName(): string {
    return 'una';

  }
}