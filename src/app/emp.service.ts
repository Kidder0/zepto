import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  userLoggedIn : boolean;
  constructor(private httpClient : HttpClient) { 
    this.userLoggedIn = false;
  }
  setUserLoggedIn(){
    this.userLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.userLoggedIn;
  }
  getCountriesDetails(){
    return this.httpClient.get('https://restcountries.com/v2/all')
  }

  getAllEmployees1(){
    return this.httpClient.get('getAllEmployees1')
  }
  register1(employee1: any){
    return this.httpClient.post('register1',employee1)
  }


  deletebyid(emp1:number){
    return this.httpClient.delete('delete/'+emp1)
  }
 

}
