import { Car } from "../../modules/cars/interfaces/car.interface";

/**
 * Catálogo de automóviles del sistema.
 *
 * Esta constante representa un conjunto de datos de ejemplo (mock)
 * que simula la respuesta de un backend REST con vehículos reales.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Práctica de componentes Angular
 * - Ejercicios de arquitectura modular
 *
 * @type {Car[]}
 */
export const Cars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    color: 'Blanco',
    type: 'Sedán',
    price: 22000
  },
  {
    id: 2,
    brand: 'Ford',
    model: 'Explorer',
    year: 2022,
    color: 'Negro',
    type: 'SUV',
    price: 35000
  },
  {
    id: 3,
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2023,
    color: 'Rojo',
    type: 'Deportivo',
    price: 42000
  },
  {
    id: 4,
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    color: 'Gris',
    type: 'Eléctrico',
    price: 48000
  },
  {
    id: 5,
    brand: 'Nissan',
    model: 'Frontier',
    year: 2022,
    color: 'Azul',
    type: 'Camioneta',
    price: 31000
  },
  {
    id: 6,
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    color: 'Plateado',
    type: 'Sedán',
    price: 24500
  },
  {
    id: 7,
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2023,
    color: 'Verde',
    type: 'SUV',
    price: 38000
  },
  {
    id: 8,
    brand: 'BMW',
    model: 'M3',
    year: 2024,
    color: 'Azul',
    type: 'Deportivo',
    price: 75000
  },
  {
    id: 9,
    brand: 'Tesla',
    model: 'Model Y',
    year: 2024,
    color: 'Blanco',
    type: 'Eléctrico',
    price: 52000
  },
  {
    id: 10,
    brand: 'Toyota',
    model: 'Hilux',
    year: 2023,
    color: 'Negro',
    type: 'Camioneta',
    price: 33000
  }
];
