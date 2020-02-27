import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { DelhiComponent } from './delhi.component';


export const delhiroutes:Routes=[
    {path:'',redirectTo:'delhi',pathMatch:'full'},
    {path:'delhi',component:DelhiComponent}
]
@NgModule({
    providers:[],
    imports:[RouterModule.forChild(delhiroutes)],
    exports:[DelhiComponent],
    declarations:[DelhiComponent]
})

export class DelhiModule{

}