import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Authservice/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       // add authorization header with jwt token if available
       let currentUser = this._authService.currentUser;
       if (currentUser && currentUser.token) {
         req = req.clone({
           setHeaders: {
             Authorization: `Bearer ${currentUser.token}`,
           },
         });
       }
    return next.handle(req);
  }
}
