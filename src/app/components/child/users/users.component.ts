import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private cmService: CommonService) { }

  usersArr: any = [];
  showFlag={}
  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.cmService.getAPICall('users').subscribe(res => {
      this.usersArr = [];
      this.usersArr = res;
    })
  }

}
