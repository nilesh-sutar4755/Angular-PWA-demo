import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { CommonService } from './shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  networkStatus;
  constructor(public swUpdate: SwUpdate, private cmService: CommonService, private toastr: ToastrService, private authService: AuthService) {
    let toastOptions = {
      positionClass: 'toast-bottom-center',
      timeOut: 3000,
      enableHtml: true,
      animate: 'slideFromBottom',
      messageClass: 'networkToast'
    }
    this.cmService.createOnline().subscribe(isOnline => {
      if (isOnline) {
        // this.networkStatus = "<span>Cool, you are now online</span>";
        // this.toastr.success(this.networkStatus, null,
        //   toastOptions)
      } else {
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

    if (sessionStorage.getItem('userData')) {
      this.userData = JSON.parse(sessionStorage.getItem('userData'));
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = null;
    }
  }

  isLoggedIn;
  userData;
  signIn(type): void {
    let providerID = (type == 'Google') ? GoogleLoginProvider.PROVIDER_ID : FacebookLoginProvider.PROVIDER_ID
    this.authService.signIn(providerID)
      .then(res => {
        this.isLoggedIn = true;
        this.userData = res;
        this.toastr.success('You are logged-in as ' + res.email);
        sessionStorage.setItem('userData', JSON.stringify(res))
      })
  }

  signOut(): void {
    this.authService.signOut()
      .then(res => {
        sessionStorage.removeItem('userData');
        this.isLoggedIn = null;
      })
  }
}
