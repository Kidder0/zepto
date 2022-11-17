import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: string;
  age :number;
  salary : number;
  marritalStatus : boolean;
  address: any;
  hobbies: any;

  message: string;
  constructor() { 
  this.message = '';
   this.name = 'SACHIN';
   this.age = 55;
   this.salary = 9999.99;
   this.marritalStatus = true;
   this.address ={"doorNo" : "10-10","street" : "Gachibowli","city" : "HYDERABAD"};
   this.hobbies = ["PLAYING","CHATTING","EATING","SLEEPING"];
    //alert('Hi! This is constructor..')
  }
  ngOnInit(): void {
    //alert('Hi! This is on init')
  }

  showMessage(){
    alert('method called...')
    console.log(this.message)
  }
}
