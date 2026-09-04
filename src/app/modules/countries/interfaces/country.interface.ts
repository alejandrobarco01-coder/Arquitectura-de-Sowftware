/**
 * Datos de las imágenes de bandera asociadas a un país.
 *
 * Las URLs se construyen a partir del código ISO 3166-1 alpha-2 del país.
 */
export interface CountryFlags {
  /** URL de la bandera en formato PNG. */
  png: string;

  /** URL de la bandera en formato SVG. */
  svg: string;

  /** Texto alternativo descriptivo de la bandera, cuando está disponible. */
  alt?: string;
}

/**
 * Información de un país utilizada por el módulo de países.
 *
 * Representa el modelo que consume la vista después de adaptar la respuesta de FIRST.
 */
export interface Country {
  /** Nombres común y oficial con los que se muestra el país. */
  name: {
    /** Nombre de uso común. */
    common: string;

    /** Denominación oficial. */
    official: string;
  };

  /** Capitales registradas para el país. */
  capital?: string[];

  /** Región geográfica informada por la API. */
  region: string;

  /** Población del país; FIRST no la proporciona y se usa cero como valor inicial. */
  population: number;

  /** Recursos visuales de la bandera. */
  flags: CountryFlags;

  /** Código ISO 3166-1 alpha-2 del país. */
  cca2: string;
}
