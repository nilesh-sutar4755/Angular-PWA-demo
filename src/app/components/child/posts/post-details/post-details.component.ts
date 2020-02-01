import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cmService:CommonService) { }

  postsData;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cmService.getAPICall('posts/' + params['id']).subscribe(res => {
        this.postsData = res;
      })
    });
  }

}
