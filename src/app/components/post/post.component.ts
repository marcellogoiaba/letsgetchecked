import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private postId: string = '';
  private parentId: string = null;
  public postComments: Comment[] = [];
  public numberOfComments: number = 0;
  public selectedPost: Post[] = []; 
  // in a normal application we'd have a user login and retrieve this information from a user api. I've hardcoded it to satisfy this challenge
  public user: string = 'Marcelo Silva';
  


  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    // retrieve post id  from route params and store on  postId variable
    this.route.params.subscribe( params => {
      this.postId = params.id
    })
  }

  ngOnInit() {
    this.getPostDetails(this.postId)
  }

  // get post  details and store in a post array selectedPost
  getPostDetails(value){
    this.blogService.getOnePost(value).subscribe(post => {
      this.selectedPost = post
    })
    this.getPostComments(value)
  }

  // get post comments and store in the comments array postComments
  getPostComments(id){
    this.blogService.getComments(id).subscribe(comments => {
      this.postComments = comments;
      this.numberOfComments = this.postComments.length
    })
  }

  // this function is called when add comment submit button is clicked. sends the  data to the service and subscribe to its response
  submitComment(form){
    let dateAdded = new Date();
    let newDate = dateAdded.toDateString();
    if(!form.invalid){
      this.blogService.addComment(this.postId, this.parentId, this.user, newDate, form.value.comment  ).subscribe( response => {
        this.getPostComments(this.postId);
        form.reset();
      })
    }
  }

}
