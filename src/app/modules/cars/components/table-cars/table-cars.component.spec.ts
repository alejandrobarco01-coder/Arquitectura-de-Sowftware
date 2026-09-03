import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Cars } from '../../../../core/config/cars.config';
import { TableCarsComponent } from './table-cars.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

describe('TableCarsComponent', () => {
  let component: TableCarsComponent;
  let fixture: ComponentFixture<TableCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [TableCarsComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCarsComponent);
    component = fixture.componentInstance;
    component.Cars = Cars;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada auto', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.Cars.length);
  });

  it('debería mostrar los datos del auto en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const car = component.Cars[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(car.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(car.brand);
      expect(columns[2].nativeElement.textContent.trim()).toBe(car.model);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(car.year));
      expect(columns[4].nativeElement.textContent.trim()).toBe(car.color);
    });
  });

  it('debería mapear cada tipo de carrocería a su BadgeType correcto', () => {
    expect(component.typeMap['Sedán']).toBe('success');
    expect(component.typeMap['SUV']).toBe('primary');
    expect(component.typeMap['Deportivo']).toBe('danger');
    expect(component.typeMap['Camioneta']).toBe('warning');
    expect(component.typeMap['Eléctrico']).toBe('secondary');
  });

});
