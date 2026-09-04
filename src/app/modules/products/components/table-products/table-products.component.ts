import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Product, ProductCategory } from '../../interfaces/products.interface';

/**
 * Componente de tabla de productos.
 *
 * Se utiliza para mostrar productos tecnológicos, sus referencias,
 * categorías, disponibilidad y precio en una tabla.
 *
 * @remarks
 * Este componente recibe los productos desde un componente padre
 * a través del Input `products` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-products [products]="productsList"></app-table-products>
 * ```
 */
@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  standalone: false,
})
export class TableProductsComponent {
  /**
   * Listado de productos que se mostrarán en la tabla.
   * @type {Product[]}
   * @remarks
   * Este Input permite pasar un array de productos desde un componente padre,
   * generalmente `ListProductsComponent`. Cada producto debe cumplir la interfaz `Product`.
   */
  @Input() products: Product[] = [];
  /**
   * Mapeo de categorías de productos a tipos de Badge.
   * @type {Record<ProductCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría del catálogo.
   *
   * Esto permite que en la tabla cada producto tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  readonly categoryMap: Record<ProductCategory, BadgeType> = {
    'Computadores': 'primary',
    'Periféricos': 'success',
    'Audio': 'warning',
    'Hogar inteligente': 'danger',
  };
}
