import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

/**
 * Componente de tabla para mostrar la información de los países.
 *
 * Forma parte de la capa de presentación de la aplicación.
 * Muestra una tabla con datos de los países incluyendo su bandera.
 */
@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  standalone: false,
})
export class TableCountriesComponent {
  /**
   * Listado de países que se mostrarán en la tabla.
   * Recibido desde el componente padre.
   */
  @Input() countries: Country[] = [];
}
