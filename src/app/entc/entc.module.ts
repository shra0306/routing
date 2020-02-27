import { NgModule } from '@angular/core'
import { EntcComponent } from './entc.component';
import { RouterModule, Routes } from '@angular/router';

export const entcrouter:Routes=[
    {path:'',redirectTo:'entc',pathMatch:'full'},
    {path:'entc',component:EntcComponent}
]
@NgModule({
    declarations:[EntcComponent],
    imports:[RouterModule.forChild(entcrouter)],
    exports:[EntcComponent]
})
export class EntCModule{

}