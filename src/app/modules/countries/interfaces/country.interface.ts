export interface CountryName {
    common: string;
    official: string;
}

export interface CountryFlags {
    png: string;
    svg: string;
    alt?: string;
}

export interface Country {
    name: CountryName;
    capital?: string[];
    region: string;
    subregion?: string;
    population: number;
    flags: CountryFlags;
    cca2: string;
}
