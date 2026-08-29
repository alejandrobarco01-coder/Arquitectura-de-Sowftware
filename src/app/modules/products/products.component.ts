import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de productos.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los productos, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-products></app-products>
 * ```
 */
@Component({
  selector: 'app-products',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class ProductsComponent { }
