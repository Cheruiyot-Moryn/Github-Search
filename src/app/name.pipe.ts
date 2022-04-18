import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any): string {
    let wordsLength = value.length;
    let getWord =''
    for(let i=0;i<wordsLength;i++){
      if(value.charAt(i)===" "){
        getWord=''
      } else if(value.charAt(i)!==" "){
        getWord = getWord + value.charAt(i);
      }
  
    }
  
    return getWord;
  }

}