import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { BlogService } from '../../services/blog-service.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  // Retrieve all posts from the API and store them in the posts variable
  getAllPosts(){
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    });
  }
}
