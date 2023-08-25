import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BusRoutsComponent } from './bus-routs/bus-routs.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    SchedulesComponent,
    BusRoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
