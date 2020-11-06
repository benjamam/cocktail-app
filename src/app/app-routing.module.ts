import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedDrinkViewComponent } from './components/detailed-drink-view/detailed-drink-view.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'drink/:id', component: DetailedDrinkViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
