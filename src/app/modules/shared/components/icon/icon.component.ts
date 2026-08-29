import { Component, Input } from '@angular/core';

/**
 * Componente visual para renderizar íconos de Bootstrap Icons.
 *
 * @remarks
 * Este componente encapsula el uso de Bootstrap Icons (`bi-*`),
 * evitando el uso directo de clases CSS en las plantillas
 * y promoviendo reutilización y consistencia visual.
 *
 * @example
 * ```html
 * <app-icon icon="bootstrap"></app-icon>
 * <app-icon icon="person-fill"></app-icon>
 * ```
 */
@Component({
  selector: 'app-icon',
  template: `<i class="bi" [class]="'bi-' + icon"></i>`,
  standalone: false,
})
export class IconComponent {
  /**
   * Nombre del ícono de Bootstrap.
   *
   * @remarks
   * Este valor corresponde al sufijo del ícono definido por Bootstrap Icons,
   * sin el prefijo `bi-`.
   *
   * @example
   * - `"bootstrap"`
   * - `"apple"`
   * - `"bell"`
   *
   * @required
   */
  @Input({ required: true }) icon: string = '';
}
