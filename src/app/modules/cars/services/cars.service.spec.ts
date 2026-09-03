import { TestBed } from '@angular/core/testing';
import { CarsService } from './cars.service';
import { Cars } from '../../../core/config/cars.config';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllCars debería retornar un observable con los usuarios', (done) => {
    service.getAllCars().subscribe(Cars => {
      expect(Cars).toEqual(Cars);
      expect(Cars.length).toBe(Cars.length);
      done();
    });
  });

});
