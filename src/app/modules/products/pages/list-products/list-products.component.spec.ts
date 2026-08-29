import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { PRODUCTS } from '../../../../core/config/products.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableProductsComponent } from '../../components/table-products/table-products.component';
import { ProductsService } from '../../services/products.service';
import { ListProductsComponent } from './list-products.component';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductsComponent, TableProductsComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllProducts al iniciar', () => {
    const spyGetAllProducts = jest.spyOn(productsService, 'getAllProducts').mockReturnValue(of(PRODUCTS));
    fixture.detectChanges();
    expect(spyGetAllProducts).toHaveBeenCalled();
  });

  it('debería asignar los productos recibidos del servicio', () => {
    jest.spyOn(productsService, 'getAllProducts').mockReturnValue(of(PRODUCTS));
    fixture.detectChanges();
    expect(component.products).toEqual(PRODUCTS);
  });

  it('debería pasar los productos al componente table-products', () => {
    jest.spyOn(productsService, 'getAllProducts').mockReturnValue(of(PRODUCTS));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableProductsComponent))
      .componentInstance;
    expect(tableComponent.products).toEqual(PRODUCTS);
  });

  it('debería manejar el error cuando falla getAllProducts', () => {
    component.products = [];
    const errorResponse = new Error('Error al cargar productos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(productsService, 'getAllProducts').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(productsService.getAllProducts).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.products.length).toBe(0);
  });

});
