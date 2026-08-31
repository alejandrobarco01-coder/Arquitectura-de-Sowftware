import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { UsersRoutingModule } from './users-routing-module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared-module';


/**
 * Módulo funcional para la gestión de usuarios.
 *
 * Encapsula todos los componentes, páginas y rutas relacionadas
 * con la visualización y manipulación de usuarios en la aplicación.
 *
 * @remarks
 * Este módulo se carga de forma lazy.
 * Contiene:
 * - `UsersComponent`: contenedor con `<router-outlet>`
 * - `ListUsersComponent`: página principal
 * - `TableUsersComponent`: componente de presentación visual
 *
 * @example
 * ```ts
 * {
 *   path: 'users',
 *   loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
 * }
 * ```
 */
@NgModule({
  declarations: [
    TableUsersComponent,
    ListUsersComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
