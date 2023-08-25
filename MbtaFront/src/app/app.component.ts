import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MbtaFront';
  tab = "about";
  mbtaSchedule:string ="";
  mbtaSubwayRoutes:string = "";
  mbtaBusRoutes:string = "";
  loadingMsg:string="loading"
  rawRoutes:string= "";
  ids: string[] =[];
  
  switchTab(tab: string) {
    this.tab = tab;
    console.log('.....switch.....');
  }
  constructor(private  http: HttpClient) {console.log('OnInit'); }
    // implement OnInit's `ngOnInit` method
    ngOnInit() {
        // Simple GET request with response type <any>
        this.http.get<any>('https://api-v3.mbta.com/routes?filter[type]=1').subscribe(data => {
            this.rawRoutes = JSON.stringify(data.data);
            this.mbtaSubwayRoutes =this.rawRoutes
            this.mbtaBusRoutes = this.rawRoutes;
            for(let result of data.data){
              this.ids.push(result);
              console.log(result);
           }
        });
        this.http.get<any>('https://api-v3.mbta.com/stops').subscribe(data => {
          this.mbtaSchedule = JSON.stringify(data.data);
      });
      this.loadingMsg = ""
    }
}
