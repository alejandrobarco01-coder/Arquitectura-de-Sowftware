import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

/**
 * Respuesta simplificada del endpoint de países de FIRST.
 *
 * Cada clave de `data` corresponde al código ISO del país.
 */
interface FirstCountriesResponse {
  /** Países indexados por su código ISO, con su nombre y región. */
  data: Record<string, { country: string; region: string }>;
}

/**
 * Servicio para consultar países desde la API pública de FIRST.
 *
 * La API no requiere clave ni configuración CORS, por lo que puede consumirse
 * directamente desde el cliente Angular mediante HttpClient.
 */
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  /** URL del endpoint público de FIRST que limita la consulta a cien países. */
  private readonly apiUrl = 'https://api.first.org/data/v1/countries?limit=100';

  /**
   * Crea el servicio con el cliente HTTP de Angular.
   *
   * @param http Cliente utilizado para efectuar la petición GET a FIRST.
   */
  constructor(private readonly http: HttpClient) {}

  /**
   * Obtiene y adapta los países a la estructura usada por la tabla.
   *
   * @returns Flujo con los países transformados al modelo `Country`.
   */
  getAllCountries(): Observable<Country[]> {
    return this.http.get<FirstCountriesResponse>(this.apiUrl).pipe(
      map((response) =>
        Object.entries(response.data).map(([code, country]) => ({
          name: {
            common: country.country,
            official: country.country,
          },
          capital: [],
          region: country.region,
          population: 0,
          flags: {
            png: `https://flagcdn.com/w80/${code.toLowerCase()}.png`,
            svg: `https://flagcdn.com/${code.toLowerCase()}.svg`,
          },
          cca2: code,
        }))
      )
    );
  }
}
