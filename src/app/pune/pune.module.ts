import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PuneComponent } from './pune.component'


export const puneroutes:Routes=[
    {path : '',redirectTo:'pune',pathMatch:'full'},
    {path : 'pune',component:PuneComponent}
]
@NgModule({
    declarations : [PuneComponent],
    imports : [RouterModule.forChild(puneroutes)],
    exports :[PuneComponent]
})

export class PuneModule{

}