import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de usuarios.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los usuarios, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-Cars></app-Cars>
 * ```
 */
@Component({
  selector: 'app-Cars',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class CarsComponent { }
