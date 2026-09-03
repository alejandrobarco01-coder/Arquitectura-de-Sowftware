import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarsComponent } from './pages/list-cars/list-cars.component';

/**
 * Configuración de rutas del módulo de usuarios.
 *
 * @remarks
 * Las rutas se registran mediante `RouterModule.forChild()`.
 */
const routes: Routes = [
  {
    path: 'list-cars',
    component: ListCarsComponent
  },
  {
    path: '**',
    redirectTo: 'list-cars'
  }
];

/**
 * Módulo de enrutamiento interno para Usuarios.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
