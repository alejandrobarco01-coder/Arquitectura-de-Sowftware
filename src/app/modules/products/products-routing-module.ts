import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';

/**
 * Configuración de rutas del módulo de productos.
 *
 * @remarks
 * Define la ruta `list-products` y el redireccionamiento.
 */
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

/**
 * Módulo de enrutamiento interno para Productos.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
