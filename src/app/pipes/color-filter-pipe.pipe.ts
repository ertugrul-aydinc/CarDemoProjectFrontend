import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'colorFilterPipe'
})
export class ColorFilterPipePipe implements PipeTransform {

  transform(value:CarDetail[], filterText2:string): CarDetail[] {
    filterText2 = filterText2.toLocaleLowerCase();
    return filterText2?value.filter((c:CarDetail)=>c.colorName.toLocaleLowerCase().indexOf(filterText2)!==-1):value
  }

}
