import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageFromParent = 'Display from Parent Component';
  messageToChild = 'Displayed From Child Component';

  Count = {
    counter : 1
  }

  product = {
    productId:'',
    Name: '',
    Price: ''
  }
  clickParentButton() {

    this.Count.counter = this.Count.counter + 1;
  }

  ParentButton(data) {
    this.product.productId = data.productId;
    this.product.Name = data.Name;
    this.product.Price = data.Price;
    
    console.log(data.productId +" "+ data.Name +" "+ data.Price)

  }
}
