import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-send-to-parent',
  templateUrl: './send-to-parent.component.html',
  styleUrls: ['./send-to-parent.component.css']
})
export class SendToParentComponent {

  @Output() sendToParentEvent = new EventEmitter<string>();
 

}
