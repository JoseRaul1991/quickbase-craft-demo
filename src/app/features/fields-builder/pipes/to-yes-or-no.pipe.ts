import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toYesOrNo',
})
export class ToYesOrNoPipe implements PipeTransform {
  transform(value: boolean): unknown {
    return value ? 'Yes' : 'No';
  }
}
