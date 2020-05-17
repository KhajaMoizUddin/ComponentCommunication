import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `<h2>Child Component: {{this.messageFromChild}}</h2>
  <h2>Get Total Count From Child is: {{getCount}}</h2>
  <button type='button' (click)='clickOnChildBtn()'>CLICK ON CHILD</button>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() messageFromChild: string;

@Input() getCount: any;
@Output() passToParentFromEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  product = {
    productId : 1,
    Name : 'Nike',
    Price : 200
  }



  clickOnChildBtn() {
    console.log('btnclicked');
    this.passToParentFromEmitter.emit(this.product)
  }
  ngOnChanges() {
    console.log('ngOnchanges')
    if(this.getCount ==  10)
    alert("Total Reached")
  }

}
