import { Component , Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {
  constructor(){}
  
  Object = Object;
  @Input() cur_schedule ='';
  @Input() stopList =[];

}
