import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { merge, fromEvent, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  public apiUrl = "https://jsonplaceholder.typicode.com/";
  httpHeaders;
  options;

  // data-access.service
  getAPICall(apiUrl) {
    this.httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Source: "WEB"
    });
    this.options = {
      headers: this.httpHeaders
    };

    return this.httpClient.get(this.apiUrl + apiUrl, this.options);
  }

  getAPICallWT(apiUrl) {
    this.httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Source: "WEB"
    });
    this.options = {
      headers: this.httpHeaders
    };
    return this.httpClient.get(this.apiUrl + apiUrl, this.options);
  }

  // data-post.service
  postAPICall(apiUrl, jsonBody) {
    this.httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Source: "WEB"
    });
    this.options = {
      headers: this.httpHeaders
    };

    return this.httpClient.post(
      this.apiUrl + apiUrl,
      { body: jsonBody },
      this.options
    );
  }

  // data-post.service
  patchAPICall(apiUrl) {
    this.httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Source: "WEB"
    });
    this.options = {
      headers: this.httpHeaders
    };
    console.log(this.httpHeaders, this.options);

    return this.httpClient.patch(
      this.apiUrl + apiUrl,
      { body: "" },
      this.options
    );
  }

  // Internet connctivity

  createOnline() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }
}
