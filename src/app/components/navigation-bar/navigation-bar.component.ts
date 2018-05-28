import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from '../../favorite/favorite.component';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent {
  viewMode = 'default';

  tweet = {
    likesCount: 10,
    isLiked: true
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(data: FavoriteChangedEventArgs) {
    console.log(data.isFavorite ? 'you liked it..' : 'you didn\'t like it..');
  }
}
