import {Post} from './post.modal';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'}) // with the help of providedIn the service is directly injected at the root level
export class PostService {
  private posts: Post[] = []; // because of private it will not be updated from outside
  private postUpdated = new Subject<Post[]>();
  /**  Subject contains array of type Post hence Post[]
   *  Subject is also a generic type
   */

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((res) => {
        console.log('response', res);
        // return [...this.posts];
        this.posts = res.posts;
        this.postUpdated.next([...this.posts]);
      });
  }

  // tslint:disable-next-line:typedef
  getUpdatListner() {
    return this.postUpdated.asObservable();
  }

  // tslint:disable-next-line:typedef
  setPost(id: string, title: string, content: string) {
    const post: Post = {id: '', title, content};
    this.http.post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe((res) => {
        console.log('res', res);
        this.posts.push(post);
        /** To create the copy of the Post we have used spread operator
         */
        this.postUpdated.next([...this.posts]);  // next triggers the value
      });
  }
}
