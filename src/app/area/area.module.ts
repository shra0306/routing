import { NgModule } from '@angular/core'
//import { BookComponent } from './book.component';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area.component';

export const arearoutes:Routes=[
    {path:'',redirectTo:'area',pathMatch:'full'},
    {path:'area',component:AreaComponent}
]
@NgModule({
    declarations:[AreaComponent],
    imports:[RouterModule.forChild(arearoutes)],
    exports:[AreaComponent]
})
export class AreaModule{

}