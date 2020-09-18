import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundRating'
})
export class RoundRatingPipe implements PipeTransform {

  transform(number): any {
    return Math.round(number * 10) / 10;
  }

}
