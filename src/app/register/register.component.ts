import { Component } from '@angular/core';
import { NgForm } from  '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  SaveData(data:NgForm){

    console.warn(data);
  }
}
