
import { NgModule } from '@angular/core'
import { HospitalComponent } from './hospital.component';
import { RouterModule, Routes } from '@angular/router';

export const hostroutes:Routes=[
    {path:'',redirectTo:'hospital',pathMatch:'full'},
    {path:'hospital',component:HospitalComponent}
]

@NgModule({
    declarations:[HospitalComponent],
    imports:[RouterModule.forChild(hostroutes)],
    exports:[HospitalComponent]
})

export class HospitalModule{

}