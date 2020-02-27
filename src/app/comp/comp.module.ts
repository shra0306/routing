import { NgModule } from '@angular/core'
import { CompComponent } from './comp.component';
import { RouterModule, Routes } from '@angular/router';
import { CivilComponent } from '../civil/civil.component';

export const comproutes:Routes=[
    {path:'',redirectTo:'comp',pathMatch:'full'},
    {path:'comp',component:CivilComponent}
]
@NgModule({
    declarations:[CompComponent],
    imports:[RouterModule.forChild(comproutes)],
    exports:[CompComponent]
})
export class CompModel{

}


