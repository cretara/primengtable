import { Component } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-primetable',
  templateUrl: './primetable.component.html',
  styleUrls: ['./primetable.component.scss'],
})
export class PrimeTableComponent {
  public products: Product[] = [
    {
      code: 1,
      name: 'iPhone',
      category: 'smartphone',
      quantity: 10,
    },
    {
      code: 2,
      name: 'Google Pixel',
      category: 'smartphone',
      quantity: 20,
    },
    {
      code: 3,
      name: 'Samsung smart tv',
      category: 'smart tv',
      quantity: 4,
    },
    {
      code: 4,
      name: 'Sony Bravia tv',
      category: 'smart tv',
      quantity: 5,
    },
  
  ];
}
