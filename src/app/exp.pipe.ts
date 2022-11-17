import { Pipe, PipeTransform } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  joinYear : any;
  currentYear : any;
  experience: any;
  
  transform(value: any): any {
    this.currentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.currentYear - this.joinYear;
    return this.experience;
  }

}
