import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgTableRoutingModule } from './primengtable-routing.module';
import { PrimeTableComponent } from './components/primetable/primetable.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PrimeTableComponent
  ],
  imports: [
    CommonModule,
    PrimeNgTableRoutingModule,
    TableModule,
    ButtonModule,
  ]
})
export class PrimeNgTableModule { }
