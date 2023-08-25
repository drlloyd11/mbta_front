import { Component , Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {
  constructor(){}
  @Input() cur_schedule ='';

}
