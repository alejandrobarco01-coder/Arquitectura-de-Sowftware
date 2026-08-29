import { Component } from '@angular/core';

/**
 * Componente raíz de la aplicación Angular.
 *
 * Este componente es el punto de entrada de la aplicación y contiene
 * la estructura principal del layout.
 *
 * @remarks
 * Se declara en el módulo principal (`AppModule`) y normalmente
 * incluye el header, sidebar y el `<router-outlet>` para las rutas.
 *
 * @example
 * ```html
 * <app-root></app-root>
 * ```
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent { }
