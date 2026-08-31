/** Datos de la bandera que devuelve RestCountries v3.1. */
export interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

/** Información de país utilizada por el módulo de países. */
export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region: string;
  population: number;
  flags: CountryFlags;
  cca2: string;
}
