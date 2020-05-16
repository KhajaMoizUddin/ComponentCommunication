import { Component, OnInit } from '@angular/core';
import { IProductData } from './IProductData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent to Child Communication';
  messageFromParent = 'Displayed From Parent Component';
  messageToChild = 'Displayed From Child Component';
  products: IProductData[]; 


  getProductsData() : IProductData[] {
  this.products =
    [
      {
        "ImagePath" : 'assets/ImagesFolder/nikefront.jpg',
        "ProductName":'Nike',
        "Price": 1200,
        "Quantity": 250
      },
      {
        "ImagePath" : 'assets/ImagesFolder/adidasfront.jpg',
        "ProductName":'Adidas',
        "Price": 1500,
        "Quantity": 150
      },
      {
        "ImagePath" : 'assets/ImagesFolder/pumafront.jpg',
        "ProductName":'PUMA',
        "Price": 670,
        "Quantity": 50
      },
      {
        "ImagePath" : 'assets/ImagesFolder/ucbfront.jpg',
        "ProductName":'UCB',
        "Price": 2000,
        "Quantity": 45
      }

    ];
    return this.products;
   
  }
}
