import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {

  constructor(private toast: NgToastService){

  }

  saveData(value:any)
  {
    console.log(value.value);
  
    var message  = 'Data from FORM :'+ value.name + '-'+value.password1;
    this.toast.info({detail:'TOP RIGHT',summary:message,position:'topRight',duration:5000 });
  }

}
