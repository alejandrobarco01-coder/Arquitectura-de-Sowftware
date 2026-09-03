import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Configuración de rutas principales de la aplicación.
 *
 * Define las rutas raíz con carga lazy de los módulos funcionales:
 * - `/users` → `UsersModule`
 * - `/products` → `ProductsModule`
 * - `/countries` → `CountriesModule`
 *
 * @type {Routes}
 */
const routes: Routes = [
  {
    path: 'cars',
    loadChildren: () => import('./modules/cars/cars-module').then(m => m.CarsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./modules/countries/countries-module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'cars'
  },
];

/**
 * Módulo de enrutamiento principal de la aplicación.
 *
 * Registra las rutas raíz mediante `RouterModule.forRoot()`,
 * habilitando la navegación entre los módulos funcionales
 * de la aplicación (Users, Products, Countries).
 *
 * @remarks
 * Cada módulo se carga de forma lazy (`loadChildren`) para
 * optimizar el rendimiento y reducir el bundle inicial.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
