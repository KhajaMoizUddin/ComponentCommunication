import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: 
  `<h3>{{messageFromChild}}</h3><br><br>
  <div class ='container'>
  <table class ='table'>
  <thead>
  <tr>
  <th>Images</th>
  <th>ProductName</th>
  <th>Price</th>
  <th>Quantity</th>
  </tr>
  </thead>

  <tbody>
  <tr *ngFor = 'let product of productList'>
  <td> <img [src]='product.ImagePath' [width] = 80 [style.margin] = 2></td>
  <td>{{product.ProductName}}</td>
  <td>{{product.Price}}</td>
  <td>{{product.Quantity}}</td>
  </tr>
  </tbody>
  </table>
  </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Input() messageFromChild: string;
 @Input() productList: any;
  constructor() { }

  ngOnInit(): void {
  }

}
