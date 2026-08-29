import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';

/**
 * Componente contenedor de productos.
 *
 * Se utiliza para gestionar y mostrar un listado de productos
 * utilizando el componente `TableProductsComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ProductsService`
 * para obtener los productos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-products.component></app-list-products.component>
 * ```
 */
@Component({
  selector: 'app-list-products.component',
  template: `<app-table-products [products]="products" ></app-table-products>`,
  standalone: false,
})
export class ListProductsComponent {
  /**
   * Listado de productos obtenidos desde el servicio.
   * @type {Product[]}
   */
  products: Product[] = [];
  /**
   * Servicio para obtener productos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private productsService = inject(ProductsService);

  /**
   * Inicializa el componente y carga los productos.
   * @remarks
   * Se suscribe al método `getAllProducts()` del servicio y
   * asigna los datos recibidos a la propiedad `products`.
   */
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (products) => this.products = products,
      error: (error) => console.error(error),
    })
  }
}
