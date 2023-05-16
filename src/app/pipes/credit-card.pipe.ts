import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length !== 16) {
      return value;
    }
    let groups: string[] = value.match(/.{1,4}/g) || [];
    return groups.join(' - ');
  }

}
