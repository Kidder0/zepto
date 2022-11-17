import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name: any, gender : any): any {
    if(gender == 'male')
    return 'Mr. ' + name;
    else
    return 'Miss ' + name;
  }

}
