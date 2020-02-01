import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cmService:CommonService) { }

  postsArr:any = [];
  ngOnInit() {
    this.getData()
  }

  getData(){
    this.postsArr = [];
    this.cmService.getAPICall('posts').subscribe(res => {
      this.postsArr = res;
    })
  }
}
