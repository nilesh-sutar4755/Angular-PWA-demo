import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private cmService: CommonService) { }

  postsArr: any = [];
  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.cmService.getAPICall('posts').subscribe(res => {
      this.postsArr = [];
      this.postsArr = res;
    })
  }


}
