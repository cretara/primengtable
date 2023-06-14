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
      orders: [],
    },
    {
      code: 2,
      name: 'Google Pixel',
      category: 'smartphone',
      quantity: 20,
      orders: [
        {
          id: '1000-0',
          productCode: 'f230fh0g3',
          date: '2020-09-13',
          amount: 65,
          quantity: 1,
          customer: 'David James',
          status: 'PENDING',
        },
        {
          id: '1000-1',
          productCode: 'f230fh0g3',
          date: '2020-05-14',
          amount: 130,
          quantity: 2,
          customer: 'Leon Rodrigues',
          status: 'DELIVERED',
        },
      ],
    },
    {
      code: 3,
      name: 'Samsung smart tv',
      category: 'smart tv',
      quantity: 4,
      orders: [],
    },
    {
      code: 4,
      name: 'Sony Bravia tv',
      category: 'smart tv',
      quantity: 5,
      orders: [],
    },
  ];
}
