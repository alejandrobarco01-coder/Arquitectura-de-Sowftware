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

  it('should fetch and adapt countries (getAllCountries)', () => {
    const apiResponse = {
      data: {
        CO: { country: 'Colombia', region: 'Americas' },
      },
    };

    service.getAllCountries().subscribe((countries) => {
      expect(countries.length).toBe(1);
      expect(countries[0]).toMatchObject({
        name: { common: 'Colombia' },
        region: 'Americas',
        cca2: 'CO',
      });
      expect(countries[0].flags.png).toBe('https://flagcdn.com/w80/co.png');
    });

    const req = httpMock.expectOne('https://api.first.org/data/v1/countries?limit=100');
    expect(req.request.method).toBe('GET');
    req.flush(apiResponse);
  });
});
