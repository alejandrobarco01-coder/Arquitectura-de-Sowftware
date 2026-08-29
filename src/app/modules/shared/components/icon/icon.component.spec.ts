import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { By } from '@angular/platform-browser';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar un elemento <i>', () => {
    component.icon = 'apple';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement).toBeTruthy();
  });

  it('debería tener la clase base "bi"', () => {
    component.icon = 'apple';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi');
  });

  it('debería aplicar la clase dinámica según el icon', () => {
    component.icon = 'apple';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi-apple');
  });

  it('debería actualizar la clase cuando cambia el icon', () => {
    component.icon = 'apple';
    fixture.detectChanges();

    let iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi-apple');

    component.icon = 'archive';
    fixture.detectChanges();

    iconElement = fixture.debugElement.query(By.css('i'));
    expect(iconElement.nativeElement.classList).toContain('bi-archive');
  });

});
