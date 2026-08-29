import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CountriesService } from './countries.service';
import { Country } from '../interfaces/country.interface';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountriesService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CountriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verificamos que no haya peticiones pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all countries (getAllCountries)', () => {
    const mockCountries: Country[] = [
      {
        name: { common: 'Colombia', official: 'Republic of Colombia' },
        capital: ['Bogotá'],
        region: 'Americas',
        population: 50882884,
        flags: { png: 'img.png', svg: 'img.svg' },
        cca2: 'CO'
      }
    ];

    service.getAllCountries().subscribe((countries) => {
      expect(countries.length).toBe(1);
      expect(countries).toEqual(mockCountries);
    });

    const req = httpMock.expectOne('https://restcountries.com/v3.1/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockCountries);
  });
});
