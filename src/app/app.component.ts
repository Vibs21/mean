import { Component } from '@angular/core';
import {Post} from './post/post.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean';
  public apposts: Post[]  = [];

  onPostAdded = (post: any) => {
    this.apposts.push(post);
    console.log('post', this.apposts);
  }
}
