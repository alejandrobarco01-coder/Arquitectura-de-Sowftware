import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../../../core/config/users.config';
import { User } from '../interfaces/users.interface';

/**
 * Servicio para gestionar usuarios.
 *
 * Se encarga de proporcionar métodos para obtener los usuarios de la aplicación.
 * Actualmente devuelve un listado de usuarios de ejemplo definidos en `USERS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los usuarios.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private usersService: UsersService) {}
 *
 * ngOnInit() {
 *   this.usersService.getAllUsers().subscribe(users => {
 *     console.log(users);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * Obtiene todos los usuarios disponibles.
   *
   * @returns Observable con el listado de usuarios (`User[]`).
   */
  getAllUsers(): Observable<User[]> {
    return of(USERS);
  }
}