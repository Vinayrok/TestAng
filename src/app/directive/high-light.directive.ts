import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(el:ElementRef) { 
    console.log(el.nativeElement)
    el.nativeElement.style.color = "blue";
    el.nativeElement.innerText = "DateTime:";
  }

}
