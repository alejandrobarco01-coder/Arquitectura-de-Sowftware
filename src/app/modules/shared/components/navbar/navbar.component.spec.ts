import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NAVBAR_ITEMS } from '../../../../core/config/navbar.config';
import { IconComponent } from '../icon/icon.component';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent, IconComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar navbarItems desde NAVBAR_ITEMS', () => {
    expect(component.navbarItems).toEqual(NAVBAR_ITEMS);
    expect(component.navbarItems.length).toBeGreaterThan(0);
  });

  it('debería mostrar el título "Taller Modularidad"', () => {
    const title = fixture.debugElement.query(By.css('h3'));
    expect(title.nativeElement.textContent).toContain('Taller Modularidad');
  });

  it('debería renderizar el componente app-icon', () => {
    const icon = fixture.debugElement.query(By.css('app-icon'));
    expect(icon).toBeTruthy();
  });

  it('debería renderizar un link por cada navbarItem', () => {
    const links = fixture.debugElement.queryAll(By.css('ul.nav li.nav-item'));
    expect(links.length).toEqual(NAVBAR_ITEMS.length);
  });

  it('debería mostrar el label correcto en cada link', () => {
    const links = fixture.debugElement.queryAll(By.css('a.nav-link'));
    links.forEach((link, index) => {
      expect(link.nativeElement.textContent.trim())
        .toBe(NAVBAR_ITEMS[index].label);
    });
  });

});
