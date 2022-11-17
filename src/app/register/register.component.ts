import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: EmpService) { }

  countriesList: any;

  ngOnInit(): void {
    this.service.getCountriesDetails().subscribe((data: any)=>{
      this.countriesList =data;
      console.log(this.countriesList)
    });
  }

  submitRegForm(regForm: any){
    console.log(regForm)
    this.service.register1(regForm).subscribe((data: any)=>console.log(data));
  }
  
}
