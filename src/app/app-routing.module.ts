import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';

const routes: Routes = [
  {path:'menu', component:MenuComponent},
  {path:'details/:recipe_id', component:ProductdetailsComponent},
  {path:'', component:MenuComponent},
  {path:'*', component:MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
