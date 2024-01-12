// blog-posts.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogPostsService } from '../blog-posts.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private blogPostsService: BlogPostsService) {}

  ngOnInit() {
    this.blogPostsService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log('Posts',this.posts);
    });
  }
}
