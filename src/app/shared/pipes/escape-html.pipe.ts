import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escapeHtml'
})
export class EscapeHtml implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
