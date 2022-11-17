import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employees: any;
  loginId:string;
  password: string;
  constructor(private router:Router, private empService: EmpService) {
    this.loginId='';
    this.password='';
    this.employees = [{ empId: 1, empName: 'PASHA', salary: 9999.99,gender:'M',doj:'04-09-1999',loginId:'PASHA@123',password:'PASSWORD'},
    { empId: 2, empName: 'ELIAS', salary: 8888.88,gender:'M',doj:'12-12-2018',loginId:'ELIAS@123',password:'PASSWORD'},
    { empId: 3, empName: 'SAI', salary: 7777.77,gender:'M',doj:'09-10-2004',loginId:'SAI@123',password:'PASSWORD'},
    { empId: 4, empName: 'MERRY', salary: 8656.77,gender:'F',doj:'09-10-2017',loginId:'MERRY@123',password:'PASSWORD'}];
   }

  ngOnInit(): void {
  }
  loginSubmit2(loginFormValue: any){
    if(loginFormValue.loginId =='ADMIN' && loginFormValue.password == 'ADMIN'){
      this.empService.setUserLoggedIn();
      this.router.navigate(['products']);
    }else{
      this.employees.forEach((employee: any) => {
        if(loginFormValue.loginId == employee.loginId && loginFormValue.password == employee.password){
          this.empService.setUserLoggedIn();
          this.router.navigate(['showemp']);
        }
      });
    }
  }
  loginSubmit(){
    if(this.loginId =='ADMIN' && this.password == 'ADMIN'){
      alert('WELCOME TO ADMIN HOME PAGE');
    }else{
      this.employees.forEach((employee: any) => {
        if(this.loginId == employee.loginId && this.password == employee.password){
          alert('WELCOME TO EMPLOYEE HOME PAGE..')
        }
      });
    }
  }


  
}
