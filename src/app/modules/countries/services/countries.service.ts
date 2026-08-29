import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

/**
 * Servicio para consultar datos de países desde la API RestCountries.
 *
 * Encapsula la lógica de negocio para obtener la lista de países,
 * utilizando HttpClient para peticiones asíncronas.
 */
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  /**
   * URL base de la API de RestCountries.
   */
  private readonly apiUrl = 'https://restcountries.com/v3.1/all';

  /**
   * Inyecta HttpClient para realizar peticiones HTTP.
   * @param http Cliente HTTP de Angular.
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtiene todos los países disponibles.
   * @returns Un Observable que emite un arreglo de países.
   */
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
