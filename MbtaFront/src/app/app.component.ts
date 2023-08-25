import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MbtaFront';
  tab = "about";
  switchTab(tab: string) {
    this.tab = tab;
  }
}
