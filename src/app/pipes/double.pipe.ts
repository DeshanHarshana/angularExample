import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: string, args?: any[]): string {
    return value.trim() + value + value;
  }

}
