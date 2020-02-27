import { NgModule } from '@angular/core'
import { HostelComponent } from './hostel.component';
import { RouterModule, Routes } from '@angular/router';

export const hostelroutes:Routes=[
    {path:'',redirectTo:'hostel',pathMatch:'full'},
    {path:'hostel',component:HostelComponent}
]

@NgModule({
    declarations:[HostelComponent],
    imports:[RouterModule.forChild(hostelroutes)],
    exports:[HostelComponent]
    
})
export class HostelModule{

}