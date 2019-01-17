import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: Post[] = [];
  comments: Comment[] = [];

  private apiUrl = 'http://localhost:9001'; 

  constructor(private http: HttpClient){}

    // get all posts observable function 
    public getPosts(): Observable<Post[]>{
      return this.http.get<Post[]>(this.apiUrl + '/posts');
    }

    // get a selected post observable function 
    public getOnePost(id): Observable<Post[]>{
      return this.http.get<Post[]>(this.apiUrl + '/posts/' + id)
    }

    // get all comments by post id 
    public getComments(id): Observable<Comment[]>{
      return this.http.get<Comment[]>(this.apiUrl + '/posts/' + id + '/comments')
    }

    // insert a new comment function
    public addComment( postId: string, parentId: string, user: string, date: string, comment:string ): Observable<Comment[]>{
      let jsonBody = {
        postId, parentId, user, date, comment
      }
      return this.http.post<Comment[]>(this.apiUrl + '/posts/' + postId + '/comments', jsonBody)
    }

    // get a comment from comment id
    public getOneComment(id): Observable<Comment[]>{
      return this.http.get<Comment[]>(this.apiUrl + '/comments/' + id)
    }

    // update comment 
    public updateComment(id: string, postId: string, parentId: string, user: string, date:string, content: string): Observable<Comment[]>{
      let commentBody = { id, postId, parentId, user, date, content }
      return this.http.put<Comment[]>(this.apiUrl + '/comments/' + id, commentBody)
    }
}
