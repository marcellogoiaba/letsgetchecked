import {Pipe, PipeTransform} from '@angular/core';
// this pipe sorts arrays by chosen element( see homepage.component.html line 3 )

@Pipe({
    name: "sort"
  })
  export class OrderByPipe  implements PipeTransform {
    transform(array: any, field: string): any[] {
      if (!Array.isArray(array)) {
        return;
      }
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return 1;
        } else if (a[field] > b[field]) {
          return -1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }