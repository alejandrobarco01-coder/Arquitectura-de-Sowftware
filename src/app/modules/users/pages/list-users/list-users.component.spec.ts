import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { USERS } from '../../../../core/config/users.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableUsersComponent } from '../../components/table-users/table-users.component';
import { UsersService } from '../../services/users.service';
import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let usersService: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUsersComponent, TableUsersComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllUsers al iniciar', () => {
    const spyGetAllUsers = jest.spyOn(usersService, 'getAllUsers').mockReturnValue(of(USERS));
    fixture.detectChanges();
    expect(spyGetAllUsers).toHaveBeenCalled();
  });

  it('debería asignar los usuarios recibidos del servicio', () => {
    jest.spyOn(usersService, 'getAllUsers').mockReturnValue(of(USERS));
    fixture.detectChanges();
    expect(component.users).toEqual(USERS);
  });

  it('debería pasar los usuarios al componente table-users', () => {
    jest.spyOn(usersService, 'getAllUsers').mockReturnValue(of(USERS));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableUsersComponent))
      .componentInstance;
    expect(tableComponent.users).toEqual(USERS);
  });

  it('debería manejar el error cuando falla getAllUsers', () => {
    component.users = [];
    const errorResponse = new Error('Error al cargar usuarios');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(usersService, 'getAllUsers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(usersService.getAllUsers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.users.length).toBe(0);
  });

});
