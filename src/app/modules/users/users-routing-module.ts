import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './pages/list-users/list-users.component';

/**
 * Configuración de rutas del módulo de usuarios.
 *
 * @remarks
 * Las rutas se registran mediante `RouterModule.forChild()`.
 */
const routes: Routes = [
  {
    path: 'list-users',
    component: ListUsersComponent
  },
  {
    path: '**',
    redirectTo: 'list-users'
  }
];

/**
 * Módulo de enrutamiento interno para Usuarios.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
