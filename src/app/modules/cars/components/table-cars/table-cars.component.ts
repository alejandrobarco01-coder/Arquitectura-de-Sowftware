import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Car, CarType } from '../../interfaces/car.interface';

/**
 * Componente de tabla de automóviles.
 *
 * Se utiliza para mostrar un listado de autos en una tabla,
 * mostrando información como id, marca, modelo, año, color,
 * tipo de carrocería y precio, con un badge visual por tipo.
 *
 * @remarks
 * Este componente recibe los autos desde un componente padre
 * a través del Input `Cars` y utiliza el mapeo `typeMap`
 * para asignar colores a los badges según el tipo de carrocería.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-cars [Cars]="carsList"></app-table-cars>
 * ```
 */
@Component({
  selector: 'app-table-cars',
  templateUrl: './table-cars.component.html',
  standalone: false,
})
export class TableCarsComponent {
  /**
   * Listado de automóviles que se mostrarán en la tabla.
   * @type {Car[]}
   * @remarks
   * Este Input permite pasar un array de autos desde un componente padre,
   * generalmente `ListCarsComponent`. Cada auto debe cumplir la interfaz `Car`.
   */
  @Input() Cars: Car[] = [];

  /**
   * Mapeo de tipos de carrocería a tipos de Badge.
   * @type {Record<CarType, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada tipo:
   * - 'Sedán'     → 'success'   (verde)
   * - 'SUV'       → 'primary'   (azul)
   * - 'Deportivo' → 'danger'    (rojo)
   * - 'Camioneta' → 'warning'   (amarillo)
   * - 'Eléctrico' → 'secondary' (gris)
   */
  typeMap: Record<CarType, BadgeType> = {
    'Sedán':     'success',
    'SUV':       'primary',
    'Deportivo': 'danger',
    'Camioneta': 'warning',
    'Eléctrico': 'secondary'
  };
}
