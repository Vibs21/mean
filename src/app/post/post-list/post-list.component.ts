import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../post.modal';
import {PostService} from '../post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy{
  panelOpenState = false;
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postSup: any;

  constructor(public postService: PostService) {
    this.postSup = Subscription;

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.postService.getPosts();
    this.postSup = this.postService.getUpdatListner()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.postSup.unsubscribe();
  }

  postAdd = () => {
    console.log('add');
  }

  function(x: number, y: number): number {
    return x + y;
  }
}
