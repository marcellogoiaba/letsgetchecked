import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Pipe, PipeTransform} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PostComponent } from './components/post/post.component';
import { Post } from './models/post.model';
import { Comment } from './models/comment.model';
import { BlogService } from './services/blog-service.service';
import { OrderByPipe } from './pipes/orderByPipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PostComponent, 
    OrderByPipe 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ Post, Comment, BlogService, OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
