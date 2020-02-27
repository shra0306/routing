import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { EntcComponent } from './entc/entc.component';
import { MechComponent } from './mech/mech.component';
import { CivilComponent } from './civil/civil.component';
import { RouterModule } from '@angular/router';
import { myRoutes } from './route.config';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { PuneComponent } from './pune/pune.component';
import { LaturComponent } from './latur/latur.component';
import { DelhiComponent } from './delhi/delhi.component';
import { CollegeComponent } from './college/college.component';
import { HospitalComponent } from './hospital/hospital.component';
import { BusComponent } from './bus/bus.component';
import { HostelComponent } from './hostel/hostel.component';
import { BookComponent } from './book/book.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { AreaComponent } from './area/area.component';
import { HarryComponent } from './harry/harry.component';
import { AuthenticationService } from './RouteGurad.service';
//import { RouteGuard } from './RouteGurad.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    //HarryComponent,
    CircleComponent,
    RectangleComponent,
    AreaComponent,
     //CompComponent,
     //EntcComponent,
     //MechComponent,
     //CivilComponent,
     //MumbaiComponent,
     //CollegeComponent,
     //HospitalComponent,
     //BusComponent,
     HostelComponent,
    //PuneComponent,
    //LaturComponent,
    //DelhiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
