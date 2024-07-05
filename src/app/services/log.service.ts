import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private toast: NgToastService) { }

  Log(message:any)
  {
    console.log(message);
    this.toast.info({detail:'TOP RIGHT',summary:message,position:'topRight',duration:5000 });
  }
}
