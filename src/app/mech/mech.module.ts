
import { NgModule } from '@angular/core'
import { MechComponent } from './mech.component';
import { RouterModule, Routes } from '@angular/router';

export const mechroutes:Routes=[
    {path:'',redirectTo:'mech',pathMatch:'full'},
    {path:'mech',component:MechComponent}
]
@NgModule({
    declarations:[MechComponent],
    imports:[RouterModule.forChild(mechroutes)],
    exports:[MechComponent]
})
export class MechModule{

}