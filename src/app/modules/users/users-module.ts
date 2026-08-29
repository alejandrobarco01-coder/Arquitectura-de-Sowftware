import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { UsersRoutingModule } from './users-routing-module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    TableUsersComponent,
    ListUsersComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
