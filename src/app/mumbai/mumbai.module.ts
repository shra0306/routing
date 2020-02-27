
import { NgModule } from '@angular/core'
import { MumbaiComponent } from './mumbai.component';
import { RouterModule, Routes } from '@angular/router';
export const  mumbairoutes:Routes=[
    {path:'',redirectTo:'mumbai'},
    {path:'mumbai',component:MumbaiComponent}
]
@NgModule({
  providers:[],
  declarations:[MumbaiComponent],
  imports:[RouterModule.forChild(mumbairoutes)],
  exports:[MumbaiComponent]
})

export class MumbaiModel{

    

}