import { Routes } from "@angular/router"
import { CompComponent } from './comp/comp.component'
import { EntcComponent } from './entc/entc.component'
import { MechComponent } from './mech/mech.component'
import { CivilComponent } from './civil/civil.component'
import { MumbaiComponent } from './mumbai/mumbai.component'
import { PuneComponent } from './pune/pune.component'
import { LaturComponent } from './latur/latur.component'
import { DelhiComponent } from './delhi/delhi.component'
import { CollegeComponent } from './college/college.component'
import { BusComponent } from './bus/bus.component'
import { HospitalComponent } from './hospital/hospital.component'
import { HostelComponent } from './hostel/hostel.component'
import { BookComponent } from './book/book.component'
import { CircleComponent } from './circle/circle.component'
import { RectangleComponent } from './rectangle/rectangle.component'
import { AreaComponent } from './area/area.component'
//import {} from './mumbai/mumbai.module#MumbaiModel'
//import {} from './pune/pune.module#PuneModule'
//import {} from './latur/latur.module#laturModule'
//import {} from './delhi/delhi.module#DelhiModule'
//import {} from './civil/civil.module#CivilModule'
//import {} from './comp/comp.module#CompModel'
//import{} from './entc/entc.module#EntCModule'
//import {} from './mech/mech.module#MechModule'
//import{} from './college/college.module#CollegeModel'
//import {} from './bus/bus.module#BusModule'
//import {} from './hospital/hospital.module#HospitalModule'
//import {} from './hostel/hostel.module#HostelModule'
//import {} from './book/book.module#bookModel'
//import {} from './circle/circle.module#circleModule'
//import {} from './rectangle/rectangle.module#RecModule'
import { from } from 'rxjs'
import { AuthenticationService } from './RouteGurad.service'
//import { RouteGuard } from './RouteGurad.service'
//import {} from './area/area.module#AreaModule'
//import{} from './harry/harry.module#harryModule'
export const myRoutes:Routes=[
    // {{path:'mumbai',loadChildren:'./mumbai/mumbai.module#MumbaiModel'},
    // {path:'pune',loadChildren:'./pune/pune.module#PuneModule'},
    // {path:'latur',loadChildren:'./latur/latur.module#laturModule'},
    // {path:'delhi',loadChildren:'./delhi/delhi.module#DelhiModule'},
    // {path:'comp',loadChildren:'./comp/comp.module#CompModel'},
    // {path:'civil',loadChildren:'./civil/civil.module#CivilModule'},
    // {path:'entc',loadChildren:'./entc/entc.module#EntCModule'},
    // {path:'mech',loadChildren:'./mech/mech.module#MechModule'},
    
    // {{path:'college',loadChildren:'./college/college.module#CollegeModel'},
    // {path:'bus',loadChildren:'./bus/bus.module#BusModule'},
    // {path:'hospital',loadChildren:'./hospital/hospital.module#HospitalModule'},
    //{path:'hostel',component:HostelComponent},
     {path:'book',component:BookComponent,},
     {path:'circle',component:CircleComponent,canActivate:[AuthenticationService],canActivateChild:[AuthenticationService],children:[
         {path:'hostel',component:HostelComponent,canActivate:[AuthenticationService]}
     ]},
     {path:'ractangle',component:RectangleComponent},
     {path:'area',component:AreaComponent}
       // {path:'harry',loadChildren:'./harry/harry.module#harryModule'}
]