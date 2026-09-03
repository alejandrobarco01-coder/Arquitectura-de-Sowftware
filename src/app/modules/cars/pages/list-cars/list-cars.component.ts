import { Component, inject, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car.interface';
import { CarsService } from '../../services/cars.service';

/**
 * Componente contenedor de usuarios.
 *
 * Se utiliza para gestionar y mostrar un listado de usuarios
 * utilizando el componente `TableCarsComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CarsService`
 * para obtener los usuarios y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-cars.component></app-list-cars.component>
 * ```
 */
@Component({
  selector: 'app-list-cars',
  template: `<app-table-cars [Cars]="Cars" ></app-table-cars>`,
  standalone: false,
})
export class ListCarsComponent implements OnInit {
  /**
   * Listado de usuarios obtenidos desde el servicio.
   * @type {Car[]}
   */
  Cars: Car[] = [];
  /**
   * Servicio para obtener usuarios.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private CarsService = inject(CarsService);

  /**
   * Inicializa el componente y carga los usuarios.
   * @remarks
   * Se suscribe al método `getAllCars()` del servicio y
   * asigna los datos recibidos a la propiedad `Cars`.
   */
  ngOnInit(): void {
    this.CarsService.getAllCars().subscribe({
      next: (Cars) => this.Cars = Cars,
      error: (error) => console.error(error),
    })
  }
}
