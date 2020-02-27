import { NgModule } from '@angular/core';
import { CivilComponent } from './civil.component';
import { RouterModule, Routes } from '@angular/router';

export {} from '@angular/core'

export const civilroutes:Routes=[
    {path:'',redirectTo:'civil',pathMatch:'full'},
    {path:'civil',component:CivilComponent}

]

@NgModule({
    declarations:[CivilComponent],
    imports:[RouterModule.forChild(civilroutes)],
    exports:[CivilComponent]
})
export class CivilModule{

}

