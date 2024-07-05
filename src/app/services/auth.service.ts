import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private loggedInUser:  User | undefined;

       // Create a BehaviorSubject to hold the current state of todos
       private authSubject: BehaviorSubject<User | null> = new BehaviorSubject<User| null>(null);
       // Create an Observable from the BehaviorSubject
      authObservable: Observable<User| null> = this.authSubject.asObservable();


  constructor() { }

  login(loginUser:any): void {
    if(loginUser.email === 'vinay@gmail.com'){
      this.isAuthenticated = true;
      this.loggedInUser = loginUser as User;
      this.authSubject.next(this.loggedInUser);
    }
    else
    {
      this.isAuthenticated = false;
     
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.authSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInUser():User{
    return this.loggedInUser as User;
  }

  getUser(): BehaviorSubject<User | null> {
    return this.authSubject;
  }


}
