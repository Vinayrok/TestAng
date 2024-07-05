import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isNotAuthenticated: boolean = false;
  loggedinUser: any;
  constructor(private authService: AuthService,private router:Router, private logService:LogService) {

  }
  ngOnInit(): void {

    this.authService.authObservable.subscribe(a => {
      this.isNotAuthenticated = this.authService.isLoggedIn();
      if(this.isNotAuthenticated){

    
      this.loggedinUser = a?.email
    }
    else
    {
     
     this.router.navigate(['/Login']);
     
    }
    });
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['/Login']);
  }

  // log(message:any)
  // {
  //   this.toast.info({detail:'TOP RIGHT',summary:message,position:'topRight',duration:5000 });
  // }


}
