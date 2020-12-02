import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedbackSearch'
})
export class FeedbackSearchPipe implements PipeTransform {

  transform(feedbacks : any[], searchValue: any, fieldName): any {
    if(!feedbacks){
      return [];
    }
    if(!searchValue){
      return feedbacks;
    }
    searchValue = searchValue.toLowerCase();
    return feedbacks.filter(beneficiary =>{
      if(isNaN(searchValue)){
        return beneficiary[fieldName].toLowerCase().includes(searchValue);
      } else {
        return beneficiary[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });

  }


}
