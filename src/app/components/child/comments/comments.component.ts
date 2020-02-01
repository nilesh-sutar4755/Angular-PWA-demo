import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private cmService: CommonService) { }
  sub;
  queryId;
  commentsArr: any = []
  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.queryId = +params['id'];
        let apiUrl = this.queryId ? ('posts/ ' + this.queryId + '/comments') : 'comments'
        this.cmService.getAPICall(apiUrl)
          .subscribe(result => {
            this.commentsArr = result;
          })
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
