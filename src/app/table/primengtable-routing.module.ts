import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeTableComponent } from './components/primetable/primetable.component';

const routes: Routes = [
  {
    path: 'primetable',
    component: PrimeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeNgTableRoutingModule { }
