import { Component , OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { timer } from 'rxjs';


@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {

  twowayVariable:any = '';
  amount:number=1;
  parentData = 10;
   dateTime : Date | undefined;

  ngOnInit()
{
  timer(0,1000).subscribe(()=> 
  this.dateTime = new Date());
}


  constructor(private toast: NgToastService){

  }



  createRandomValue()
  {
    this.parentData = Math.floor(Math.random()*100);
  }



  callfromChild(val:any)
  {
    console.log(val);
    var message  = 'Recieved data from child component :'+ val;
    this.toast.info({detail:'TOP RIGHT',summary:message,position:'topRight',duration:5000 });
    
  }
  sendMessage(inputTag:HTMLInputElement)
  {
    console.log(inputTag.value);
    var message  = 'Data from TemplateReference variable :'+ inputTag.value;
    this.toast.info({detail:'TOP RIGHT',summary:message,position:'topRight',duration:5000 });
    
  }
  


}
