import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableCarsComponent } from './components/table-cars/table-cars.component';
import { ListCarsComponent } from './pages/list-cars/list-cars.component';
import { CarsRoutingModule } from './cars-routing-module';
import { CarsComponent } from './cars.component';
import { SharedModule } from '../shared/shared-module';


/**
 * Módulo funcional para la gestión de usuarios.
 *
 * Encapsula todos los componentes, páginas y rutas relacionadas
 * con la visualización y manipulación de usuarios en la aplicación.
 *
 * @remarks
 * Este módulo se carga de forma lazy.
 * Contiene:
 * - `CarsComponent`: contenedor con `<router-outlet>`
 * - `ListCarsComponent`: página principal
 * - `TableCarsComponent`: componente de presentación visual
 *
 * @example
 * ```ts
 * {
 *   path: 'Cars',
 *   loadChildren: () => import('./modules/Cars/cars-module').then(m => m.CarsModule)
 * }
 * ```
 */
@NgModule({
  declarations: [
    TableCarsComponent,
    ListCarsComponent,
    CarsComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule,
  ]
})
export class CarsModule { }
