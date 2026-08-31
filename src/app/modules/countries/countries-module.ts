import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing-module';
import { CountriesComponent } from './countries.component';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';

/**
 * Módulo de países de la aplicación.
 *
 * Encapsula todos los componentes, servicios y rutas relacionados
 * con la sección de países, incluyendo el consumo de la API pública
 * RestCountries mediante HttpClient.
 *
 * @remarks
 * Este módulo se carga de forma lazy desde el `AppRoutingModule`.
 * Contiene:
 * - `CountriesComponent`: contenedor con `<router-outlet>`
 * - `ListCountriesComponent`: página principal que obtiene los datos
 * - `TableCountriesComponent`: tabla de presentación de países
 *
 * @example
 * ```ts
 * // Carga lazy en AppRoutingModule
 * {
 *   path: 'countries',
 *   loadChildren: () => import('./modules/countries/countries-module').then(m => m.CountriesModule)
 * }
 * ```
 */
@NgModule({
  declarations: [
    CountriesComponent,
    TableCountriesComponent,
    ListCountriesComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
