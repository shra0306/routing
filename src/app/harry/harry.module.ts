
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { comproutes } from '../comp/comp.module'
import { HarryComponent } from './harry.component'

export const harryroutes:Routes=[
    {path:'',redirectTo:'harry'},
    {path:'harry',component:HarryComponent}
]
@NgModule({
    declarations:[HarryComponent],
    imports:[RouterModule.forChild(harryroutes)],
    exports:[HarryComponent]
})
export class harryModule{

}