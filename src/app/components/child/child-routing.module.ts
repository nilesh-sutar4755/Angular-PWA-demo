import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/users",
    pathMatch: "full"
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "posts/:id",
    component: PostDetailsComponent
  },
  {
    path: "comments",
    component: CommentsComponent
  },
  {
    path: "photos",
    component: PhotosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
