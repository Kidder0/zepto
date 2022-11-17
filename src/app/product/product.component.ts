import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : any;
  constructor() {
    this.products = [{ id: 1001, name: 'OnePlus Nord2', description: 'No cost EMI from ₹1,499/month.', price: 19999.99, imagePath: 'assets/Images/1.jpg' }, 
    { id: 1002, name: 'Nokia A6', description: 'No cost EMI from ₹1,499/month.', price: 13499.99, imagePath: 'assets/Images/2.jpg' }, 
    { id: 1003, name: 'Nokia BlackBerry', description: 'No cost EMI from ₹1,499/month.', price: 19999.99, imagePath: 'assets/Images/3.jpg' }, 
    { id: 1004, name: 'Samsung A5', description: 'No cost EMI from ₹1,499/month.', price: 13499.99, imagePath: 'assets/Images/4.jpg' }, 
    { id: 1005, name: 'Samsung J7 Pro', description: 'No cost EMI from ₹1,499/month.', price: 19999.99, imagePath: 'assets/Images/5.jpg' }, 
    { id: 1006, name: 'Nokia A6 Pro', description: 'No cost EMI from ₹1,499/month.', price: 13499.99, imagePath: 'assets/Images/6.jpg' }];
  }

  ngOnInit(): void {
  }

}
