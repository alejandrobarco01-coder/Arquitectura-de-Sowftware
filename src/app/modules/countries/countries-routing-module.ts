import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';

/**
 * Configuración de rutas del módulo de países.
 *
 * Define las rutas internas del módulo `CountriesModule`,
 * incluyendo la ruta principal que muestra el listado de países
 * y un wildcard que redirige a dicha ruta.
 *
 * @remarks
 * Las rutas se registran mediante `RouterModule.forChild()`,
 * ya que este módulo se carga de forma lazy desde el `AppRoutingModule`.
 */
const routes: Routes = [
  {
    path: 'list-countries',
    component: ListCountriesComponent
  },
  {
    path: '**',
    redirectTo: 'list-countries'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
