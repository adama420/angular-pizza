import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let taux = args[0] || 20;
    let result = value + ((value * taux)/100);
    return result.toFixed(2).replace('.',',');
  }

}
