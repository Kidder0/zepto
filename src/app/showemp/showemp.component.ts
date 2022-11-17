import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
employees1: any;

  constructor(private service: EmpService) {
    //  this.employees = [{ empId: 1, empName: 'PASHA', salary: 9999.99,gender:'M',doj:'04-31-1999',loginId:'PASHA@123',password:'PASSWORD'},
    //  { empId: 2, empName: 'ELIAS', salary: 8888.88,gender:'M',doj:'12-15-2018',loginId:'ELIAS@123',password:'PASSWORD'},
    //  { empId: 3, empName: 'SAI', salary: 7777.77,gender:'M',doj:'04-19-2004',loginId:'SAI@123',password:'PASSWORD'},
    //  { empId: 4, empName: 'MERRY', salary: 8656.77,gender:'F',doj:'09-25-2017',loginId:'MERRY@123',password:'PASSWORD'}];
   }

  ngOnInit(): void {
    this.service.getAllEmployees1().subscribe((data: any) =>{
      console.log(data);
      this.employees1 = data;
    });
  }

   delete(empId:any){
this.service.deletebyid(empId).subscribe((data:any) =>{console.log(data) 
   this.employees1=data;this.ngOnInit();})
  
   }

   

}
