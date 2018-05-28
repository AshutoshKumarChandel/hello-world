import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {
  @Input('isFavorite') isLiked: boolean;
  @Output('favoriteChanged') onLikeClicked = new EventEmitter();

  constructor() { }

  onClick() {
    this.isLiked = !this.isLiked;
    this.onLikeClicked.emit({ isFavorite: this.isLiked });
  }
}

export interface FavoriteChangedEventArgs {
  isFavorite: boolean;
}
