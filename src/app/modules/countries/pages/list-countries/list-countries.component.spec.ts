import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { TableCountriesComponent } from '../../components/table-countries/table-countries.component';
import { ListCountriesComponent } from './list-countries.component';
import { Country } from '../../interfaces/country.interface';

const MOCK_COUNTRIES: Country[] = [
  {
    name: { common: 'Colombia', official: 'República de Colombia' },
    capital: ['Bogotá'],
    region: 'Americas',
    population: 50882884,
    flags: { png: 'img.png', svg: 'img.svg' },
    cca2: 'CO'
  },
  {
    name: { common: 'Argentina', official: 'República Argentina' },
    capital: ['Buenos Aires'],
    region: 'Americas',
    population: 45195777,
    flags: { png: 'img2.png', svg: 'img2.svg' },
    cca2: 'AR'
  }
];

describe('ListCountriesComponent', () => {
  let component: ListCountriesComponent;
  let fixture: ComponentFixture<ListCountriesComponent>;
  let countriesService: CountriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCountriesComponent, TableCountriesComponent],
      providers: [
        {
          provide: CountriesService,
          useValue: {
            getAllCountries: jest.fn()
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCountriesComponent);
    component = fixture.componentInstance;
    countriesService = TestBed.inject(CountriesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCountries al iniciar', () => {
    const spy = jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(MOCK_COUNTRIES));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('debería asignar los países recibidos del servicio (máximo 50)', () => {
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(MOCK_COUNTRIES));
    fixture.detectChanges();
    expect(component.countries).toEqual(MOCK_COUNTRIES);
  });

  it('debería establecer isLoading a false después de cargar', () => {
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(MOCK_COUNTRIES));
    expect(component.isLoading).toBe(true);
    fixture.detectChanges();
    expect(component.isLoading).toBe(false);
  });

  it('debería manejar el error cuando falla getAllCountries', () => {
    component.countries = [];
    const errorResponse = new Error('Error al cargar países');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(countriesService.getAllCountries).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error al cargar países', errorResponse);
    expect(component.isLoading).toBe(false);
    expect(component.countries.length).toBe(0);
  });

  it('debería limitar a 50 países si la API retorna más', () => {
    const manyCountries: Country[] = Array.from({ length: 100 }, (_, i) => ({
      name: { common: `País ${i}`, official: `República de País ${i}` },
      capital: [`Capital ${i}`],
      region: 'Americas',
      population: 1000000 + i,
      flags: { png: `img${i}.png`, svg: `img${i}.svg` },
      cca2: `P${i}`
    }));

    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(manyCountries));
    fixture.detectChanges();

    expect(component.countries.length).toBe(50);
  });
});
