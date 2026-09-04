import { Product } from "../../modules/products/interfaces/products.interface";

/**
 * Catálogo de productos tecnológicos disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de productos, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Product[]}
 */
export const PRODUCTS: Product[] = [
  {
    id: 1,
    sku: 'COM-001',
    name: 'Portátil Ultrabook 14 pulgadas',
    category: 'Computadores',
    price: 3299900,
    stock: 7
  },
  {
    id: 2,
    sku: 'PER-001',
    name: 'Teclado mecánico inalámbrico',
    category: 'Periféricos',
    price: 249900,
    stock: 18
  },
  {
    id: 3,
    sku: 'PER-002',
    name: 'Mouse ergonómico',
    category: 'Periféricos',
    price: 119900,
    stock: 24
  },
  {
    id: 4,
    sku: 'AUD-001',
    name: 'Audífonos con cancelación de ruido',
    category: 'Audio',
    price: 399900,
    stock: 12
  },
  {
    id: 5,
    sku: 'AUD-002',
    name: 'Parlante portátil Bluetooth',
    category: 'Audio',
    price: 189900,
    stock: 15
  },
  {
    id: 6,
    sku: 'HOG-001',
    name: 'Bombillo inteligente Wi-Fi',
    category: 'Hogar inteligente',
    price: 69900,
    stock: 31
  },
  {
    id: 7,
    sku: 'HOG-002',
    name: 'Cámara de seguridad interior',
    category: 'Hogar inteligente',
    price: 159900,
    stock: 9
  },
  {
    id: 8,
    sku: 'COM-002',
    name: 'Monitor IPS de 24 pulgadas',
    category: 'Computadores',
    price: 729900,
    stock: 11
  }
];
