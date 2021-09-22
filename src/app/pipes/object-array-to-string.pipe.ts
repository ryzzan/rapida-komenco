import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'objetArrayToString'
})
export class ObjectArrayToStringPipe implements PipeTransform {
  transform(objects: any[], fields: string[]): string[] {
    const response = [''];
    objects.forEach(object => {
      fields.forEach(field => {
        const element = object[field];

        response.push(element);
      });
    });
    return response;
  }
}
