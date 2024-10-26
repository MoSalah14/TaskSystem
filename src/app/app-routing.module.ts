import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CartComponent } from './all-categories/Cart.component';

const routes: Routes = [
  {path: '' , redirectTo:'home' , pathMatch:'full'},
  {path: "home",component:HomePageComponent},
  {path: 'AddProduct',component: AddProductComponent},
  {path: 'Cart' , component:CartComponent},
  {path: 'AddCategory' , component:AddCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
