import { Component , Input,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
  constructor(){}
  @Input() cur_routes ='';
  @Input() routeList = [];
}
