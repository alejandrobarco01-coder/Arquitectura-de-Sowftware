import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';

/**
 * Página principal del catálogo tecnológico.
 *
 * Muestra el inventario disponible mediante el componente de tabla.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ProductsService`
 * para obtener los productos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-products></app-list-products>
 * ```
 */
@Component({
  selector: 'app-list-products',
  template: `
    <section class="container py-4" aria-labelledby="products-title">
      <h1 id="products-title" class="h3">Catálogo tecnológico</h1>
      <p class="text-muted">Consulta la disponibilidad y el precio de cada producto.</p>
      <app-table-products [products]="products"></app-table-products>
    </section>
  `,
  standalone: false,
})
export class ListProductsComponent implements OnInit {
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
