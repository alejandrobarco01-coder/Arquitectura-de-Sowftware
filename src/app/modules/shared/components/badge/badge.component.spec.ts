import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BadgeType, BadgeTypeText } from '../../interfaces/badge.interface';
import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el texto del badge', () => {
    component.text = 'Sistemas';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toBe('Sistemas');
  });

  it('debería aplicar las clases según type y typeText', () => {
    component.type = 'success';
    component.typeText = 'text-dark';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    const classes = span.nativeElement.className;
    expect(classes).toContain('bg-success');
    expect(classes).toContain('text-dark');
  });

  it('getClass debería retornar las clases correctas', () => {
    component.type = 'warning';
    component.typeText = 'text-white';
    const result = component.getClass();
    expect(result).toBe('bg-warning text-white');
  });

  it('debería usar valores por defecto si no se pasan inputs', () => {
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    const classes = span.nativeElement.className;
    expect(classes).toContain('bg-primary');
    expect(classes).toContain('text-white');
  });

  it('debería generar clases correctas para múltiples combinaciones', () => {
    const TYPES: BadgeType[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const TEXTS: BadgeTypeText[] = ['text-white', 'text-dark'];
    TYPES.forEach(type => {
      TEXTS.forEach(typeText => {
        component.type = type;
        component.typeText = typeText;
        fixture.detectChanges();
        expect(component.getClass()).toBe(`bg-${type} ${typeText}`);
      });
    });
  });

});
