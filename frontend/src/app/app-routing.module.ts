import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreComponent } from './Components/bookstore/bookstore.component';

const routes: Routes = [
  {path : '', redirectTo : 'book', pathMatch : 'full'},
  {path : 'book', component : BookstoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
