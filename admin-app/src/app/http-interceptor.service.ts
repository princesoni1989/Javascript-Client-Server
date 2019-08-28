import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("################### Requst Url #######################", req.url)
    return next.handle(req).pipe(tap(event => {

      console.log("eventevent", event)
      if (event instanceof HttpResponse) {
        if (event.body && event.body.success) {

          console.log(event.body)
        }

      }
    }))
  }
}
