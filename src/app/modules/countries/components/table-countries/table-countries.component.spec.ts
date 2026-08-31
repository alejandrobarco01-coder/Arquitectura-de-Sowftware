import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableCountriesComponent } from './table-countries.component';

describe('TableCountriesComponent', () => {
  let component: TableCountriesComponent;
  let fixture: ComponentFixture<TableCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty default countries array', () => {
    expect(component.countries).toEqual([]);
  });

  it('should render table rows based on input', () => {
    component.countries = [
      {
        name: { common: 'Colombia', official: 'República de Colombia' },
        capital: ['Bogotá'],
        region: 'Americas',
        population: 50000000,
        flags: { png: '', svg: '' },
        cca2: 'CO'
      }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(1);
    expect(rows[0].textContent).toContain('Colombia');
    expect(rows[0].textContent).toContain('CO');
  });

  it('should render empty state message if no countries', () => {
    component.countries = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const emptyRow = compiled.querySelector('tbody tr td[colspan="4"]');
    expect(emptyRow).toBeTruthy();
    expect(emptyRow?.textContent).toContain('No hay países disponibles');
  });
});
