import { NgModule } from '@angular/core'
import { RectangleComponent } from './rectangle.component';
import { RouterModule, Routes } from '@angular/router';

export const recroutes:Routes=[
    {path:'',redirectTo:'rectangle',pathMatch:'full'},
    {path:'rectangle',component:RectangleComponent}
]

@NgModule({
    declarations:[RectangleComponent],
    imports:[RouterModule.forChild(recroutes)],
    exports:[RectangleComponent]
})
export class RecModule{

}
