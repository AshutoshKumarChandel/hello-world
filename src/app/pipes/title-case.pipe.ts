import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return null;
    return this.formatWords(value.split(' ')).join(' ');
  }

  private formatWords(words: string[]) {
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      }
      else {
        words[i] = this.toTitleCase(word);
      }
    }

    return words;
  }

  private isPreposition(word: string) {
    let prepositions = ['about', 'beside', 'near', 'to', 'above', 'between', 'of', 'towards', 'across', 'beyond', 'off', 'under', 'after', 'by', 'on', 'underneath', 'against', 'despite', 'onto', 'unlike', 'along', 'down', 'opposite', 'until', 'among', 'during', 'out', 'up', 'around', 'except', 'outside', 'upon', 'as', 'for', 'over', 'via', 'at', 'from', 'past', 'with', 'before', 'in', 'round', 'within', 'behind', 'inside', 'since', 'without', 'below', 'into', 'than', 'beneath', 'like', 'through', 'the', 'this', 'there', 'them', 'is', 'at'];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string) {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
