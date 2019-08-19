import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   if(value==1){
     return "In Stock";
   }
   else if(value==0){
     return "out of stock";
   }
  }

}
