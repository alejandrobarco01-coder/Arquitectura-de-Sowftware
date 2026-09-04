import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductsComponent } from './products.component';

/**
 * Configuración de rutas del módulo de productos.
 *
 * @remarks
 * Define un contenedor para el módulo, su página de catálogo y los
 * redireccionamientos para rutas vacías o desconocidas.
 */
const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'catalog',
        component: ListProductsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'catalog'
      },
      {
        path: '**',
        redirectTo: 'catalog'
      }
    ]
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
