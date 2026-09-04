import { Component } from '@angular/core';

/**
 * Componente contenedor del catálogo de tecnología.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los productos, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Centraliza las rutas internas del módulo de productos.
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
