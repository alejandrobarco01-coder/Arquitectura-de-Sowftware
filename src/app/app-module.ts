import { CommonModule } from '@angular/common';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared-module';

/**
 * Módulo raíz de la aplicación Angular.
 *
 * Este módulo inicializa la aplicación, importa los módulos necesarios
 * y registra los proveedores globales, incluyendo `HttpClient` para
 * el consumo de APIs externas.
 *
 * @remarks
 * Se encarga de:
 * - Declarar el componente raíz `AppComponent`
 * - Importar `SharedModule` para componentes compartidos (Navbar, Badge, Icon)
 * - Importar `AppRoutingModule` para la configuración de rutas lazy
 * - Proveer `HttpClient` a nivel global para peticiones HTTP
 *
 * @example
 * ```ts
 * platformBrowserDynamic().bootstrapModule(AppModule);
 * ```
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
