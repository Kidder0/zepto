import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: EmpService) { }

  ngOnInit(): void {
  }
  submitRegForm(student: any){
    //this.service.registerStudent(student).subscribe((data: any)=>console.log(data));
  }
}
