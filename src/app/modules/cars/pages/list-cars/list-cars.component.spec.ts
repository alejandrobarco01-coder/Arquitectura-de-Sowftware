import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { of, throwError } from 'rxjs';
import { Cars } from '../../../../core/config/cars.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableCarsComponent } from '../../components/table-cars/table-cars.component';
import { CarsService } from '../../services/cars.service';
import { ListCarsComponent } from './list-cars.component';

describe('ListCarsComponent', () => {
  let component: ListCarsComponent;
  let fixture: ComponentFixture<ListCarsComponent>;
  let carsService: CarsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ListCarsComponent, TableCarsComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarsComponent);
    component = fixture.componentInstance;
    carsService = TestBed.inject(CarsService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCars al iniciar', () => {
    const spyGetAllCars = jest.spyOn(carsService, 'getAllCars').mockReturnValue(of(Cars));
    fixture.detectChanges();
    expect(spyGetAllCars).toHaveBeenCalled();
  });

  it('debería asignar los autos recibidos del servicio', () => {
    jest.spyOn(carsService, 'getAllCars').mockReturnValue(of(Cars));
    fixture.detectChanges();
    expect(component.Cars).toEqual(Cars);
  });

  it('debería pasar los autos al componente table-cars', () => {
    jest.spyOn(carsService, 'getAllCars').mockReturnValue(of(Cars));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableCarsComponent))
      .componentInstance;
    expect(tableComponent.Cars).toEqual(Cars);
  });

  it('debería manejar el error cuando falla getAllCars', () => {
    component.Cars = [];
    const errorResponse = new Error('Error al cargar autos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(carsService, 'getAllCars').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(carsService.getAllCars).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.Cars.length).toBe(0);
  });

});
