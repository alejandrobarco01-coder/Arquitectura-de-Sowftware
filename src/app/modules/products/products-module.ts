import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing-module';
import { ProductsComponent } from './products.component';

/**
 * Módulo funcional para la gestión de productos.
 *
 * Encapsula componentes y rutas para mostrar el catálogo
 * de productos. Se carga de forma lazy.
 *
 * @remarks
 * Contiene:
 * - `ProductsComponent`: contenedor con `<router-outlet>`
 * - `ListProductsComponent`: página principal
 * - `TableProductsComponent`: componente de presentación
 */
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
