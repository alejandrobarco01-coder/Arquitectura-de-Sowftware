/**
 * Interfaz que representa un producto tecnológico del catálogo.
 *
 * Contiene la información básica necesaria para mostrar un producto
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada producto tiene un identificador, referencia comercial, categoría,
 * existencias y precio en pesos colombianos.
 *
 * @example
 * ```ts
 * const producto: Product = {
 *   id: 1,
 *   sku: 'TEC-001',
 *   name: 'Teclado mecánico',
 *   category: 'Periféricos',
 *   price: 249900,
 *   stock: 18
 * };
 * ```
 */
export interface Product {
  /** Identificador único del producto. */
  id: number;

  /** Referencia comercial única del inventario. */
  sku: string;

  /** Nombre del producto. */
  name: string;

  /** Categoría funcional del producto. */
  category: ProductCategory;

  /** Precio unitario en pesos colombianos. */
  price: number;

  /** Unidades disponibles en inventario. */
  stock: number;
}

/**
 * Tipo de categoría de producto.
 *
 * @remarks
 * Este tipo restringe las categorías a las líneas disponibles en el catálogo:
 * - 'Computadores'
 * - 'Periféricos'
 * - 'Audio'
 * - 'Hogar inteligente'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const categoria: ProductCategory = 'Periféricos';
 * ```
 */
export type ProductCategory = 'Computadores' | 'Periféricos' | 'Audio' | 'Hogar inteligente';
