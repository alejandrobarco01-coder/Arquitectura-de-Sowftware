import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cars } from '../../../core/config/cars.config';
import { Car } from '../interfaces/car.interface';

/**
 * Servicio para gestionar usuarios.
 *
 * Se encarga de proporcionar métodos para obtener los usuarios de la aplicación.
 * Actualmente devuelve un listado de usuarios de ejemplo definidos en `Cars`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los usuarios.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private CarsService: CarsService) {}
 *
 * ngOnInit() {
 *   this.CarsService.getAllCars().subscribe(Cars => {
 *     console.log(Cars);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  /**
   * Obtiene todos los usuarios disponibles.
   *
   * @returns Observable con el listado de usuarios (`Car[]`).
   */
  getAllCars(): Observable<Car[]> {
    return of(Cars);
  }
}
