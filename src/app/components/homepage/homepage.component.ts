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

  public posts: Post[] = [];
  public selectedPost: Post[] = [];
  public postComments: Comment[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    });
  }
}
