import {Component, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../post.modal';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  // title = '';
  // content = '';

  constructor(public postService: PostService) {}

  @Output() postCreated = new EventEmitter<Post>();

  /** template driven form example
   */
  postAdd = (form: NgForm) => {
    if (form.invalid) {
      return;
    }
    console.log('add', form.value);
    // const post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    /** used by eventemitter
     */
    // this.postCreated.emit(post);
    this.postService.setPost('', form.value.title, form.value.content);
    form.resetForm();
  }
}
