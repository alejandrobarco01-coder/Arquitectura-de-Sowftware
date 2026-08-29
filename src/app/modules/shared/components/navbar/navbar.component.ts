import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from '../../../../core/config/navbar.config';
import { NavbarItem } from '../../interfaces/navbar.interface';

/**
 * Componente de navegación principal de la aplicación.
 *
 * @remarks
 * Este componente representa la barra de navegación superior
 * y se encarga de renderizar los enlaces definidos en la
 * configuración central (`NAVBAR_ITEMS`).
 *
 * Sigue el principio de **separación de responsabilidades**:
 * - La estructura visual se define en la plantilla HTML.
 * - Los datos de navegación se obtienen desde configuración.
 *
 * @example
 * ```html
 * <app-navbar></app-navbar>
 * ```
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
})
export class NavbarComponent {
  /**
   * Listado de ítems que conforman la navegación.
   *
   * @remarks
   * Cada elemento contiene:
   * - `label`: texto visible del enlace
   * - `url`: ruta asociada al router de Angular
   *
   * Esta propiedad se inicializa a partir de la constante
   * `NAVBAR_ITEMS`, permitiendo una configuración centralizada.
   */
  navbarItems: NavbarItem[] = [];

  /**
   * Constructor del componente.
   *
   * @remarks
   * Inicializa los elementos del navbar a partir de la
   * configuración definida en el core de la aplicación.
   */
  constructor(){
    this.navbarItems = NAVBAR_ITEMS;
  }
}
