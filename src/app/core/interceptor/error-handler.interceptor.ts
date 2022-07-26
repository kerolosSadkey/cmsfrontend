import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../Services/Authservice/auth.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  return next.handle(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api =>  to prevent user from accessing unauthorized pages if token is expired or invalid
        this._authService.logOut();
        location.reload();
      }

      // console.log(err);
      const errorMsg = err.error || err.statusText;
      return throwError(errorMsg);
    })
  );
}
}
