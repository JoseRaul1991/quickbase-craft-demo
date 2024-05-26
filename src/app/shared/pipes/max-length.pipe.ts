import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLengthHighLight',
  standalone: true,
})
export class MaxLengthPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (!maxLength || !value || value.length <= maxLength) {
      return value;
    }

    const init = value.slice(0, maxLength);
    const end = value.slice(maxLength, value.length);

    return `${init}<span class="text-red-600">${end}</span>`;
  }
}
