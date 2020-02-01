import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private cmService: CommonService) { }

  photosArr: any = [];
  imageUrl;
  ngOnInit() {
    this.getPhotos()
  }

  getPhotos() {
    this.cmService.getAPICall('photos').subscribe(res => {
      this.photosArr = [];
      this.photosArr = res;
    })
  }

  viewImage(url) {
    this.imageUrl = url;
  }
}
