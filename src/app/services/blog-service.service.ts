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

    public getPosts(): Observable<Post[]>{
      return this.http.get<Post[]>(this.apiUrl + '/posts');
    }

    public getOnePost(id): Observable<Post[]>{
      return this.http.get<Post[]>(this.apiUrl + '/posts/' + id)
    }

    public getComments(id): Observable<Comment[]>{
      return this.http.get<Comment[]>(this.apiUrl + '/posts/' + id + '/comments')
    }

    public addComment( postId: string, parentId: string, user: string, date: string, comment:string ): Observable<Comment[]>{
      let jsonBody = {
        postId, parentId, user, date, comment
      }
      return this.http.post<Comment[]>(this.apiUrl + '/posts/' + postId + '/comments', jsonBody)
    }
}
