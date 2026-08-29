import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';

const routes: Routes = [
  {
    path: 'list-products',
    component: ListProductsComponent
  },
  {
    path: '**',
    redirectTo: 'list-products'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
