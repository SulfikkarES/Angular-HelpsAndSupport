import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeName'
})
export class PipeNamePipe implements PipeTransform {

  transform(Name:string, Gender:string): string {
    if(Gender.toLowerCase()=="male")
    {
      return "Mr."+Name;
    }
    else
   {
    return "Miss."+Name;
   }
  }

}
