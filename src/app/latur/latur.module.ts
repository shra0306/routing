import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LaturComponent } from './latur.component'

export const laturroutes:Routes=[
    {path:'',redirectTo:'latur',pathMatch:'full'},
    {path:'latur',component:LaturComponent}
]

@NgModule({
    providers:[],
    exports:[LaturComponent],
    imports:[RouterModule.forChild(laturroutes)],
    declarations:[LaturComponent]

})

export class laturModule{

}
