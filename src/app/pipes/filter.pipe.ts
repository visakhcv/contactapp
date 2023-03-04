import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any[],searchkey:string,propertyname:string): any[] {

    const result:any = []
    if(!allcontacts || searchkey =='' ||propertyname ==''){
      return allcontacts
    }
    allcontacts.forEach((contact:any)=>{
      if(contact[propertyname].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }

}
