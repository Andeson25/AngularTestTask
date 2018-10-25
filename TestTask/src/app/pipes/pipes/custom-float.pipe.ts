import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customFloatPipe'
})
export class CustomFloatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.toString().includes('.') && value.toString().split('.')[1].length >= 3) {
      return value.toString().split('.')[0] + '.' + value.toString().split('.')[1].slice(0, 3);
    }
    else {
      return value;
    }
  }

}
