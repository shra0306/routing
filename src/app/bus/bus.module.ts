import { NgModule } from '@angular/core'
import { BusComponent } from './bus.component';
import { RouterModule, Routes } from '@angular/router';


export const busroutes:Routes=[
    {path:'',redirectTo:'bus',pathMatch:'full'},
    {path:'bus',component:BusComponent}
]
@NgModule({
    declarations:[BusComponent],
    imports:[RouterModule.forChild(busroutes)],
    exports:[BusComponent]
})
export class BusModule{

}

