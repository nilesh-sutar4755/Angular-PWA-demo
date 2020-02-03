import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { CommonService } from './shared/services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  networkStatus;
  constructor(public swUpdate: SwUpdate, private cmService: CommonService,private toastr: ToastrService) {
    let toastOptions = {
      positionClass : 'toast-bottom-center',
      timeOut : 3000,
      enableHtml: true,
      animate : 'slideFromBottom',
      messageClass: 'networkToast'
    }
    this.cmService.createOnline().subscribe(isOnline => {
      if(isOnline){
        this.networkStatus = "<span>Cool, you are now online</span>";
        this.toastr.success(this.networkStatus, null,
        toastOptions)
      }else {
        this.networkStatus = "<span>You're offline,<br> Please check internet connection</span>";
        this.toastr.warning(this.networkStatus, null,
        toastOptions);
      }
    });
  }
  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        alert("New version available, Load new version...!");
        window.location.reload()
      })
    }
  }
}
