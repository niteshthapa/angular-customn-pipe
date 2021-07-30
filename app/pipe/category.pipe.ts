import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(value: any,filterValue:any){
 
    return value.filter(item => item.type === filterValue);
  }
}
