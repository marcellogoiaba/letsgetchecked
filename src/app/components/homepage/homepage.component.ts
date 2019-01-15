import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { BlogService } from '../../services/blog-service.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public posts: Post[];
  public selectedPost: Post[];
  public postComments: Comment[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.blogService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }

  getPostDetails(value){
    this.blogService.getOnePost(value).subscribe(post => {
      this.selectedPost = post
      console.log(this.selectedPost);
    })
    this.getPostComments(value)
  }

  getPostComments(id){
    this.blogService.getComments(id).subscribe(comments => {
      this.postComments = comments;
      console.log('comments', this.postComments)
    })
  }

}
