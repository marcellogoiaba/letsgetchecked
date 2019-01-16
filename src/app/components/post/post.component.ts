import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private postId: string = '';
  public postComments: Comment[] = [];
  public numberOfComments: number = 0;
  public selectedPost: Post[] = []; 
  public newComment: string = '';
  


  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.postId = params.id
    })
  }

  ngOnInit() {
    this.getPostDetails(this.postId)
  }

  getPostDetails(value){
    this.blogService.getOnePost(value).subscribe(post => {
      this.selectedPost = post
    })
    this.getPostComments(value)
  }

  getPostComments(id){
    this.blogService.getComments(id).subscribe(comments => {
      this.postComments = comments;
      this.numberOfComments = this.postComments.length
    })
  }

  printIt(){
    console.log(this.newComment)
  }

}
