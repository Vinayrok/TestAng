import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  text= 'text';
  displayVal:string= '';
  userName = "peter";
  disable:boolean = true;
  color ="orange1";
  users=['a1','a2','a3','a4']
  getData()
  {
    console.log("testing");
  }

  logData(value:string)
  {
    console.log(value);
    this.displayVal = value;
  }

  flip()
  {
    this.disable = !this.disable;
  }

}
