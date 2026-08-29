import { Component, OnInit } from '@angular/core';
import { Country } from './interfaces/country.interface';
import { CountriesService } from './services/countries.service';

/**
 * Componente principal del módulo de países.
 *
 * Se encarga de coordinar la obtención de datos de países desde el servicio
 * y pasarlos al componente de presentación de la tabla.
 */
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  standalone: false,
})
export class CountriesComponent implements OnInit {
  /**
   * Arreglo que almacena la lista de países a mostrar.
   */
  countries: Country[] = [];

  /**
   * Indicador de carga para mostrar un estado de "cargando" mientras se obtienen los datos.
   */
  isLoading: boolean = true;

  /**
   * Inyecta el servicio de países.
   * @param countriesService Servicio para acceder a los datos de países.
   */
  constructor(private countriesService: CountriesService) {}

  /**
   * Método de ciclo de vida de Angular. Se ejecuta al inicializar el componente.
   * Dispara la carga de los países.
   */
  ngOnInit(): void {
    this.loadCountries();
  }

  /**
   * Llama al servicio de países para obtener los datos.
   * Maneja el estado de carga y almacena los resultados en `this.countries`.
   */
  loadCountries(): void {
    this.isLoading = true;
    this.countriesService.getAllCountries().subscribe({
      next: (data) => {
        // Tomamos los primeros 50 para no saturar la tabla como ejemplo
        this.countries = data.slice(0, 50);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar países', error);
        this.isLoading = false;
      }
    });
  }
}
