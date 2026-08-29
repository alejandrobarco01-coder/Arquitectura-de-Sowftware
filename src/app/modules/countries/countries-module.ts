import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing-module';
import { CountriesComponent } from './countries.component';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';

@NgModule({
  declarations: [
    CountriesComponent,
    TableCountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
