import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing-module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    TableProductsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
