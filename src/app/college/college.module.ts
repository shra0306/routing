import { NgModule } from '@angular/core'
import { CollegeComponent } from './college.component';
import { RouterModule, Routes } from '@angular/router';


export const collroutes:Routes=[
    {path:'',redirectTo:'college',pathMatch:'full'},
    {path:'college',component:CollegeComponent}
]
@NgModule({
    providers:[CollegeComponent],
    imports:[RouterModule.forChild(collroutes)],
    exports:[CollegeComponent]
})
export class CollegeModel{

}