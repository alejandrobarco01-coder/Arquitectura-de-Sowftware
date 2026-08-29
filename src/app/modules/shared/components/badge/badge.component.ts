import { Component, Input } from '@angular/core';
import { BadgeType, BadgeTypeText } from '../../interfaces/badge.interface';

/**
 * Componente visual tipo Badge.
 *
 * Se utiliza para mostrar información corta o estados
 * (por ejemplo: estado de un usuario, categoría, tipo, etc.)
 * aplicando estilos basados en Bootstrap.
 *
 * @remarks
 * Este componente forma parte del sistema de diseño y sigue
 * el enfoque de diseño atómico como un **átomo**.
 *
 * @example
 * ```html
 * <app-badge
 *   text="Activo"
 *   type="success"
 *   typeText="text-white">
 * </app-badge>
 * ```
 */
@Component({
  selector: 'app-badge',
  template: `<span class="badge" [class]="getClass()" >{{ text }}</span>`,
  standalone: false,
})
export class BadgeComponent {
  /**
   * Texto que se muestra dentro del badge.
   *
   * @remarks
   * Generalmente representa un estado, categoría o etiqueta corta.
   *
   * @defaultValue ''
   */
  @Input() text: string = '';
  /**
   * Tipo de color del badge.
   *
   * @remarks
   * Corresponde a los colores definidos por Bootstrap
   * (`primary`, `success`, `danger`, etc.).
   *
   * @defaultValue 'primary'
   */
  @Input() type: BadgeType = 'primary';
  /**
   * Color del texto del badge.
   *
   * @remarks
   * Se recomienda `text-white` para fondos oscuros
   * y `text-dark` para fondos claros.
   *
   * @defaultValue 'text-white'
   */
  @Input() typeText: BadgeTypeText = 'text-white';

  /**
   * Construye las clases CSS del badge según el tipo y color de texto.
   *
   * @returns Cadena con las clases CSS aplicadas al badge.
   *
   * @example
   * ```ts
   * getClass(); // "bg-success text-white"
   * ```
   */
  getClass(): string {
    return `bg-${this.type} ${this.typeText}`
  }
}
