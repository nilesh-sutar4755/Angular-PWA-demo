import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(public loaderService: LoaderService, public cmService: CommonService) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        this.loaderService.show();
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errMsg;
                    // Client Side Error
                    if (error.error instanceof ErrorEvent) {
                        errMsg = `Error: ${error.error.message}`;
                    }
                    else {
                        // Server Side Error
                    }
                    if (error.status == 0) {
                        alert("An error occured, when we ran the operation. This might be a temporary issue. Wait a few minutes,and then try again.");
                    } else {
                        return throwError(error);
                    }

                }),
                finalize(() => this.loaderService.hide())
            )
    }
}   