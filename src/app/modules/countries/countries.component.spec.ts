import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CountriesComponent } from './countries.component';
import { CountriesService } from './services/countries.service';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let mockCountriesService: any;

  beforeEach(async () => {
    mockCountriesService = {
      getAllCountries: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [ CountriesComponent, TableCountriesComponent ],
      providers: [
        { provide: CountriesService, useValue: mockCountriesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load countries on init and set isLoading to false on success', () => {
    const mockData = [
      {
        name: { common: 'Colombia', official: 'Republic of Colombia' },
        region: 'Americas', population: 50000000,
        flags: { png: '', svg: '' }, cca2: 'CO'
      }
    ];
    mockCountriesService.getAllCountries.mockReturnValue(of(mockData));

    fixture.detectChanges(); // triggers ngOnInit

    expect(mockCountriesService.getAllCountries).toHaveBeenCalled();
    expect(component.countries).toEqual(mockData);
    expect(component.isLoading).toBe(false);
  });

  it('should handle error when loading countries', () => {
    mockCountriesService.getAllCountries.mockReturnValue(throwError(() => new Error('Error')));
    jest.spyOn(console, 'error').mockImplementation(() => {});

    fixture.detectChanges(); // triggers ngOnInit

    expect(mockCountriesService.getAllCountries).toHaveBeenCalled();
    expect(component.isLoading).toBe(false);
    expect(component.countries).toEqual([]);
    expect(console.error).toHaveBeenCalled();
  });
});
