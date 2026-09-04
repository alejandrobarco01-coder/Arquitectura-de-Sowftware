import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PRODUCTS } from '../../../../core/config/products.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableProductsComponent } from './table-products.component';

describe('TableProductsComponent', () => {
  let component: TableProductsComponent;
  let fixture: ComponentFixture<TableProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProductsComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProductsComponent);
    component = fixture.componentInstance;
    component.products = PRODUCTS;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada producto', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.products.length);
  });

  it('debería mostrar los datos del producto en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const product = component.products[index];
      const productPrice = new CurrencyPipe('en-US').transform(
        product.price,
        'COP',
        'symbol-narrow',
        '1.0-0'
      );

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(product.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(product.sku);
      expect(columns[2].nativeElement.textContent.trim()).toBe(product.name);
      expect(columns[3].nativeElement.textContent.trim()).toBe(product.category);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(product.stock));
      expect(columns[5].nativeElement.textContent.trim()).toBe(productPrice);
    });
  });

  it('debería mapear cada categoría a su BadgeType correcto', () => {
    expect(component.categoryMap['Computadores']).toBe('primary');
    expect(component.categoryMap['Periféricos']).toBe('success');
    expect(component.categoryMap['Audio']).toBe('warning');
    expect(component.categoryMap['Hogar inteligente']).toBe('danger');
  });
});
