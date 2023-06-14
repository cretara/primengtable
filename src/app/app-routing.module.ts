import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNgTableModule } from './table/primengtable.module';
import { PrimeNgTableRoutingModule } from './table/primengtable-routing.module';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PrimeNgTableModule, PrimeNgTableRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
