import { Component, inject, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

/**
 * Componente contenedor de países.
 *
 * Se utiliza para gestionar y mostrar un listado de países
 * utilizando el componente `TableCountriesComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CountriesService`
 * para obtener los países desde la API RestCountries y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-countries></app-list-countries>
 * ```
 */
@Component({
  selector: 'app-list-countries',
  template: `
    @if (isLoading) {
      <div class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3 text-muted">Cargando datos desde la API...</p>
      </div>
    } @else {
      <app-table-countries [countries]="countries"></app-table-countries>
    }
  `,
  standalone: false,
})
export class ListCountriesComponent implements OnInit {
  /**
   * Listado de países obtenidos desde el servicio.
   * @type {Country[]}
   */
  countries: Country[] = [];

  /**
   * Indicador de carga para mostrar un estado de "cargando"
   * mientras se obtienen los datos desde la API.
   */
  isLoading: boolean = true;

  /**
   * Servicio para obtener países desde la API RestCountries.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private countriesService = inject(CountriesService);

  /**
   * Inicializa el componente y carga los países.
   * @remarks
   * Se suscribe al método `getAllCountries()` del servicio y
   * asigna los primeros 50 resultados a la propiedad `countries`.
   */
  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data.slice(0, 50);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar países', error);
        this.isLoading = false;
      },
    });
  }
}
