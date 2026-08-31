import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/**
 * Módulo compartido de la aplicación.
 *
 * Contiene componentes de presentación reutilizables a través
 * de toda la aplicación, como `BadgeComponent`, `IconComponent`
 * y `NavbarComponent`.
 *
 * @remarks
 * Este módulo NO provee servicios, solo declara y exporta
 * componentes visuales sin estado complejo para mantenerlo
 * verdaderamente compartido y reusable.
 */
@NgModule({
  declarations: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
