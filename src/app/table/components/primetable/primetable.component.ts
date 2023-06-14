import { Component } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-primetable',
  templateUrl: './primetable.component.html',
  styleUrls: ['./primetable.component.scss']
})
export class PrimeTableComponent {

  public products:Product[] = [{
    code: 1,
    name: "iPhone",
    category: "smartphone",
    quantity: 10
  }]

}
