import { Component, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bus-routs',
  templateUrl: './bus-routs.component.html',
  styleUrls: ['./bus-routs.component.css']
})
export class BusRoutsComponent {
  @Input() cur_routes ='';
}
