/**
 * Interfaz que representa un automóvil del catálogo.
 *
 * Contiene la información básica necesaria para mostrar un auto
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada auto debe tener un `id` único, marca, modelo, año de fabricación,
 * color, tipo de carrocería y precio en USD.
 *
 * @example
 * ```ts
 * const auto: Car = {
 *   id: 1,
 *   brand: 'Toyota',
 *   model: 'Corolla',
 *   year: 2023,
 *   color: 'Blanco',
 *   type: 'Sedán',
 *   price: 22000
 * };
 * ```
 */
export interface Car {
  /** Identificador único del auto */
  id: number;

  /** Marca del fabricante */
  brand: string;

  /** Modelo del vehículo */
  model: string;

  /** Año de fabricación */
  year: number;

  /** Color del vehículo */
  color: string;

  /** Tipo de carrocería */
  type: CarType;

  /** Precio en dólares (USD) */
  price: number;
}

/**
 * Tipo de carrocería de un automóvil.
 *
 * @remarks
 * Este tipo restringe las categorías a los valores predefinidos:
 * - 'Sedán'
 * - 'SUV'
 * - 'Deportivo'
 * - 'Camioneta'
 * - 'Eléctrico'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const tipo: CarType = 'SUV';
 * ```
 */
export type CarType = 'Sedán' | 'SUV' | 'Deportivo' | 'Camioneta' | 'Eléctrico';
