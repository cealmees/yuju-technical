import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@environment';


@Injectable()
export class AuthenticationHeaderInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.appendTokenToRequest(request)).pipe(
      map((event: HttpEvent<any>) => event),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  private appendTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const token = `Token ${environment.TOKEN}`;

    return request.clone({
      setHeaders: {
        Authorization: token
      }
    });
  }
}
