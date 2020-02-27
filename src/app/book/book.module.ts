import { NgModule } from '@angular/core'
import { BookComponent } from './book.component';
import { RouterModule, Routes } from '@angular/router';

export const bookroutes:Routes=[
    {path:'',redirectTo:'book',pathMatch:'full'},
    {path:'book',component:BookComponent}
]
@NgModule({
    declarations:[BookComponent],
    imports:[RouterModule.forChild(bookroutes)],
    exports:[BookComponent]
})
export class bookModel{

}