import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [PostsComponent,UsersComponent, PostDetailsComponent, CommentsComponent, PhotosComponent],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
