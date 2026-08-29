import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { USERS } from '../../../../core/config/users.config';
import { TableUsersComponent } from './table-users.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

describe('TableUsersComponent', () => {
  let component: TableUsersComponent;
  let fixture: ComponentFixture<TableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUsersComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUsersComponent);
    component = fixture.componentInstance;
    component.users = USERS;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada usuario', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.users.length);
  });

  it('debería mostrar los datos del usuario en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const user = component.users[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(user.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(user.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(user.lastName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(user.age));
      expect(columns[4].nativeElement.textContent.trim()).toBe(user.email);
    });
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component.engineeringMap['Sistemas']).toBe('success');
    expect(component.engineeringMap['Electronica']).toBe('primary');
    expect(component.engineeringMap['Biomedica']).toBe('warning');
    expect(component.engineeringMap['Industrial']).toBe('danger');
    expect(component.engineeringMap['Ambiental']).toBe('secondary');
  });

});
