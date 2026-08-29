import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../../../core/config/products.config';
import { Product } from '../interfaces/products.interface';

/**
 * Servicio para gestionar productos.
 *
 * Se encarga de proporcionar métodos para obtener los productos de la aplicación.
 * Actualmente devuelve un listado de productos de ejemplo definidos en `PRODUCTS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los productos.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private productsService: ProductsService) {}
 *
 * ngOnInit() {
 *   this.productsService.getAllProducts().subscribe(products => {
 *     console.log(products);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /**
   * Obtiene todos los productos disponibles.
   *
   * @returns Observable con el listado de productos (`Product[]`).
   */
  getAllProducts(): Observable<Product[]>{
    return of(PRODUCTS);
  }
}
