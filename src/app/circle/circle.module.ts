import { NgModule } from '@angular/core'
import { CircleComponent } from './circle.component';
import { RouterModule, Routes } from '@angular/router';

export const cirroutes:Routes=[
    {path:'',redirectTo:'circle',pathMatch:'full'},
    {path:'circle',component:CircleComponent}
]
@NgModule({
    declarations:[CircleComponent],
    imports:[RouterModule.forChild(cirroutes)],
    exports:[CircleComponent]
})
export class circleModule{

}