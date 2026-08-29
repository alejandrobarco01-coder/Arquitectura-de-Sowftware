/**
 * Estructura del nombre de un país.
 */
export interface CountryName {
    /** Nombre común del país */
    common: string;
    /** Nombre oficial del país */
    official: string;
}

/**
 * URLs de las imágenes de las banderas de un país.
 */
export interface CountryFlags {
    /** URL de la bandera en formato PNG */
    png: string;
    /** URL de la bandera en formato SVG */
    svg: string;
    /** Texto alternativo descriptivo de la bandera */
    alt?: string;
}

/**
 * Representa la información de un país obtenida de la API RestCountries.
 */
export interface Country {
    /** Nombres del país */
    name: CountryName;
    /** Arreglo con la lista de capitales del país */
    capital?: string[];
    /** Región o continente del país */
    region: string;
    /** Subregión geográfica del país */
    subregion?: string;
    /** Cantidad total de habitantes */
    population: number;
    /** Objetos con las imágenes de la bandera */
    flags: CountryFlags;
    /** Código ISO de dos letras del país */
    cca2: string;
}
