import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog-service.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  posts: Post[];

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
}
